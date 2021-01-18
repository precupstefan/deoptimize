import * as byFunctions from "./by";
import * as untilFunctions from "./until";
import * as afterFunctions from "./after";

export const deoptimize = function deoptimize() {
    return {
        by: byFunctions,
        until: untilFunctions,
        after: afterFunctions
    };
};
