# PathUtil

> A helper class for working with paths.

## Installation
Simply do: `npm install @wessberg/pathutil`.

## Usage
```typescript
const pathUtil = new PathUtil();
pathUtil.hasExtension("foo/bar.ts"); // true
pathUtil.clearExtension("foo/bar.ts"); // foo/bar
pathUtil.isLib("path"); // true
pathUtil.makeRelative("./foo/bar/baz.ts", "./foo/bar.ts"); // "../bar.ts"