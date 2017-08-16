export interface IPathUtil {
	takeExtension (path: string): string;
	takeDirectory (path: string): string;
	takeFilename (path: string): string;
	hasExtension (path: string): boolean;
	clearExtension (path: string): string;
	appendBeforeExtension (path: string, append: string): string;
	makeRelative (to: string, basePath: string, nodeResolution?: boolean): string;
	makeAbsolute (relativePath: string, basePath?: string, nodeResolution?: boolean): string;
	isLib (path: string): boolean;
	setExtension (path: string, extension?: string|null): string;
	dotExtension (extension: string): string;
}