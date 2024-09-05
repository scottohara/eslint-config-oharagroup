import deprecated from "./deprecated.js";
import layoutAndFormatting from "./layout-and-formatting.js";
import possibleProblems from "./possible-problems.js";
import suggestions from "./suggestions.js";

export default {
	...possibleProblems,
	...suggestions,
	...layoutAndFormatting,
	...deprecated,
};
