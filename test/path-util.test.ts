import {test} from "ava";
import {IPathUtil} from "../src/i-path-util";
import {PathUtil} from "../src/path-util";

let pathUtil: IPathUtil;
test.beforeEach(() => pathUtil = new PathUtil());

test("Correctly calculates relative paths. #1", t => {
	const basePath = "./foo/bar.ts";
	const toPath = "./foo/bar/baz.ts";
	t.deepEqual(pathUtil.makeRelative(toPath, basePath), "../bar.ts");
});

test("Correctly calculates relative paths. #2", t => {
	const basePath = "@some_lib/bar.ts";
	const toPath = "foo/bar/baz.ts";
	t.deepEqual(pathUtil.makeRelative(toPath, basePath, true), "@some_lib/bar.ts");
});

test("Correctly calculates relative paths. #3", t => {
	const basePath = "@some_lib/bar";
	const toPath = "foo/bar/baz.ts";
	t.deepEqual(pathUtil.makeRelative(toPath, basePath, true), "@some_lib/bar");
});

test("Correctly calculates relative paths. #4", t => {
	const basePath = "@some_lib/bar";
	const toPath = "foo/bar/baz.ts";
	t.deepEqual(pathUtil.makeRelative(toPath, basePath, false), "../../@some_lib/bar");
});

test("Correctly calculates absolute paths. #1", t => {
	const basePath = "./foo/bar";
	const relativePath = "./foo/bar/baz.ts";
	t.deepEqual(pathUtil.makeAbsolute(relativePath, basePath), "foo/bar/foo/bar/baz.ts");
});

test("Correctly calculates absolute paths. #2", t => {
	const basePath = "foo";
	const relativePath = "./bar";
	t.deepEqual(pathUtil.makeAbsolute(relativePath, basePath), "foo/bar");
});

test("Correctly clears extensions. #1", t => {
	t.deepEqual(pathUtil.clearExtension("foo.ts"), "foo");
});

test("Correctly clears extensions. #2", t => {
	t.deepEqual(pathUtil.clearExtension("foo/bar.ts"), "foo/bar");
});

test("Correctly clears extensions. #3", t => {
	t.deepEqual(pathUtil.clearExtension("foo/bar"), "foo/bar");
});

test("Correctly clears extensions. #4", t => {
	t.deepEqual(pathUtil.clearExtension(""), "");
});

test("Correctly appends to a string before its extension. #1", t => {
	t.deepEqual(pathUtil.appendBeforeExtension("foo/bar.ts", ".test"), "foo/bar.test.ts");
});

test("Correctly appends to a string before its extension. #2", t => {
	t.deepEqual(pathUtil.appendBeforeExtension("foo/bar", "zz"), "foo/barzz");
});

test("Correctly sets an extension. #1", t => {
	t.deepEqual(pathUtil.setExtension("foo/bar", "ts"), "foo/bar.ts");
});

test("Correctly sets an extension. #2", t => {
	t.deepEqual(pathUtil.setExtension("foo/bar", ".ts"), "foo/bar.ts");
});

test("Correctly sets an extension. #3", t => {
	t.deepEqual(pathUtil.setExtension("foo/bar"), "foo/bar");
});

test("Correctly dots an extension. #1", t => {
	t.deepEqual(pathUtil.dotExtension(".ts"), ".ts");
});

test("Correctly dots an extension. #2", t => {
	t.deepEqual(pathUtil.dotExtension("ts"), ".ts");
});

test("Correctly dots an extension. #3", t => {
	t.deepEqual(pathUtil.dotExtension("."), ".");
});

test("Correctly dots an extension. #4", t => {
	t.deepEqual(pathUtil.dotExtension(""), ".");
});