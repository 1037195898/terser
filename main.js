import "./lib/transform.js";
import "./lib/mozilla-ast.js";
import { minify } from "./lib/minify.js";
import * as parse from "./lib/parse.js";
import * as AST from "./lib/ast.js";
import * as utils from "./lib/utils/index.js";

export { minify } from "./lib/minify.js";
export {AST, parse, utils};
export { run_cli as _run_cli } from "./lib/cli.js";



export async function _default_options() {
    const defs = {};

    Object.keys(infer_options({ 0: 0 })).forEach((component) => {
        const options = infer_options({
            [component]: {0: 0}
        });

        if (options) defs[component] = options;
    });
    return defs;
}

async function infer_options(options) {
    try {
        await minify("", options);
    } catch (error) {
        return error.defs;
    }
}
