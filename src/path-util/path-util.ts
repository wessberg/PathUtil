import {DIContainer} from "@wessberg/di";
import {IPathUtil} from "./i-path-util";
import {IPathUtilHost} from "./i-path-util-host";

/**
 * A PathUtil class meant for public consumption. This shadows the actual PathUtilHost class to ensure
 * that it can be used without having to dependency inject it when clients consume it.
 */
export class PathUtil implements IPathUtil {
	constructor () {
		return DIContainer.get<IPathUtilHost>();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @param {string} _append
	 * @returns {string}
	 */
	public appendBeforeExtension (_path: string, _append: string): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @returns {string}
	 */
	public clearExtension (_path: string): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _extension
	 * @returns {string}
	 */
	public dotExtension (_extension: string): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @returns {boolean}
	 */
	public hasExtension (_path: string): boolean {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @returns {boolean}
	 */
	public isLib (_path: string): boolean {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _relativePath
	 * @param {string} _basePath
	 * @param {boolean} _nodeResolution
	 * @returns {string}
	 */
	public makeAbsolute (_relativePath: string, _basePath?: string, _nodeResolution?: boolean): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _to
	 * @param {string} _basePath
	 * @param {boolean} _nodeResolution
	 * @returns {string}
	 */
	public makeRelative (_to: string, _basePath: string, _nodeResolution?: boolean): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @param {string | null} _extension
	 * @returns {string}
	 */
	public setExtension (_path: string, _extension?: string | null): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @returns {string}
	 */
	public takeDirectory (_path: string): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @returns {string}
	 */
	public takeExtension (_path: string): string {
		throw new Error();
	}

	/**
	 * This is a noop. The constructor returns the proper implementation of PathUtil
	 * @param {string} _path
	 * @returns {string}
	 */
	public takeFilename (_path: string): string {
		throw new Error();
	}
}