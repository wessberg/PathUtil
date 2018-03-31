import {DIContainer} from "@wessberg/di";
import {FileLoader, IFileLoader} from "@wessberg/fileloader";
import {IPathUtilHost} from "./path-util/i-path-util-host";
import {PathUtilHost} from "./path-util/path-util-host";

DIContainer.registerSingleton<IFileLoader, FileLoader>();
DIContainer.registerSingleton<IPathUtilHost, PathUtilHost>();