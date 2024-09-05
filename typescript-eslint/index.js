import deprecated from "./deprecated.js";
import extension from "./extension.js";
import rules from "./rules.js";

export default {
	...rules,
	...extension,
	...deprecated,
};
