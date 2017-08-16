# PathUtil
[![NPM version][npm-version-image]][npm-version-url]
[![Dev Dependencies][dev-dependencies-image]][dev-dependencies-url]

[dev-dependencies-url]: https://david-dm.org/wessberg/typedetector?type=dev

[dev-dependencies-image]: https://david-dm.org/hub.com/wessberg/pathutil/dev-status.svg
[![deps][deps-image]][deps-url]

[deps-url]: https://david-dm.org/wessberg/typedetector

[deps-image]: https://david-dm.org/hub.com/wessberg/pathutil/status.svg
[![License-mit][license-mit-image]][license-mit-url]

[license-mit-url]: https://opensource.org/licenses/MIT

[license-mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg

[npm-version-url]: https://www.npmjs.com/package/@wessberg/pathutil

[npm-version-image]: https://badge.fury.io/js/%40wessberg%2Fpathutil.svg

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