import {IPathUtil} from "./i-path-util";
import {basename, dirname, extname, isAbsolute, join, relative} from "path";
import {IFileLoader} from "@wessberg/fileloader";

/**
 * A class that helps with working with paths
 */
export class PathUtil implements IPathUtil {
	/**
	 * The possible extensions when working with resolving paths for scripts
	 * @type {string[]}
	 */
	private static readonly POSSIBLE_EXTENSIONS: string[] = [".ts", ".tsx", ".js", ".json", ".d.ts"];

	constructor (private fileLoader: IFileLoader) {}

	/**
	 * Returns the extension of a string
	 * @param {string} path
	 * @returns {string}
	 */
	public takeExtension (path: string): string {
		return extname(path);
	}

	/**
	 * Returns the directory of a string
	 * @param {string} path
	 * @returns {string}
	 */
	public takeDirectory (path: string): string {
		return dirname(path);
	}

	/**
	 * Returns the file name of a string
	 * @param {string} path
	 * @returns {string}
	 */
	public takeFilename (path: string): string {
		return basename(path);
	}

	/**
	 * Generates a relative path from the provided 'basePath' path to the provided 'to' path.
	 * @param {string} basePath
	 * @param {string} to
	 * @param {boolean} [nodeResolution=false]
	 * @returns {string}
	 */
	public makeRelative (to: string, basePath: string, nodeResolution: boolean = false): string {
		// If the base path is a library, re-use that path.
		if (nodeResolution && this.isLib(basePath)) return basePath;
		const absoluteBase = this.makeAbsolute(basePath);
		const absoluteTo = this.makeAbsolute(to);
		const relativePath = relative(dirname(absoluteTo), absoluteBase);
		return join(dirname(relativePath), basename(relativePath));
	}

	/**
	 * Makes the provided relative path into a full path. The base path can optionally be provided as a second argument.
	 * By default, it will use the process.cwd() path for this.
	 * @param {string} relativePath
	 * @param {string} [from]
	 * @param {boolean} [nodeResolution=false]
	 * @returns {string}
	 */
	public makeAbsolute (relativePath: string, from: string = process.cwd(), nodeResolution: boolean = false): string {
		// If the provided path is a lib, return that path.
		if (nodeResolution && this.isLib(relativePath)) return relativePath;
		if (isAbsolute(relativePath)) return relativePath;

		// If it is a directory (or the path doesn't exist), simply join the two paths
		if (!this.fileLoader.existsWithFirstMatchedExtensionSync(this.clearExtension(from), PathUtil.POSSIBLE_EXTENSIONS)[0] || this.fileLoader.isDirectorySync(from)) {
			return join(from, relativePath);
		} else {
			// Otherwise, go a directory up.
			return join(from, "../", relativePath);
		}
	}

	/**
	 * Clears the extension of a path, if it has any
	 * @param {string} path
	 * @returns {string}
	 */
	public clearExtension (path: string): string {
		if (!this.hasExtension(path)) return path;
		const ext = extname(path);
		const index = path.lastIndexOf(ext);
		if (index < 0) return path;
		return path.slice(0, index);
	}

	/**
	 * Appends the provided 'append' value to the string before the extension.
	 * @param {string} path
	 * @param {string} append
	 * @returns {string}
	 */
	public appendBeforeExtension (path: string, append: string): string {
		return `${this.clearExtension(path)}${append}${extname(path)}`;
	}

	/**
	 * If a path doesn't start with "." or "/", it is a library (located within node_modules)
	 * @param {string} path
	 * @returns {boolean}
	 */
	public isLib (path: string): boolean {
		return !isAbsolute(path) && !(path.startsWith(".") || path.startsWith("/"));
	}

	/**
	 * Replaces the extension of a string with a new one
	 * @param {string} path
	 * @param {string|null} [extension]
	 * @returns {string}
	 */
	public setExtension (path: string, extension?: string|null): string {
		return `${this.clearExtension(path)}${extension == null ? "" : this.dotExtension(extension)}`;
	}

	/**
	 * Makes sure that the provided extension name has a '.' in front of it.
	 * @param {string} extension
	 * @returns {string}
	 */
	public dotExtension (extension: string): string {
		return extension.startsWith(".") ? extension : `.${extension}`;
	}

	/**
	 * Returns true if the provided path has an extension
	 * @param {string} path
	 * @returns {boolean}
	 */
	public hasExtension (path: string): boolean {
		const ext = extname(path);
		return ext != null && ext !== "";
	}
}