# O'Hara Group JS style guide

## Usage:

1. Add this module as a `devDependency` to your project (`npm install eslint-config-oharagroup --save-dev)
2. Create eslint.config.mjs as follows:

```js
import oharagroup from "eslint-config-oharagroup";

export default [
	...oharagroup,

	// add any additional config here
];
```

## Upgrading to new eslint versions:

1. Apply any rule changes to the corresponding rule files
2. Update the `eslint` version in `package.json`, and bump the package `version`
3. Ensure that this package is registered for linking (`cd [this dir] && npm link`)
4. Test by going to a project that uses the shared config and `npm link eslint-config-oharagroup`
5. Publish the new version (`npm publish`)
6. Unlink the local version in the test project if necessary (`npm unlink`)
