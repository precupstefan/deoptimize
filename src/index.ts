import { byDate,byDateSync } from './by';


export const deoptimize = function deoptimize() {
    return {
        byDate,
        byDateSync
    }
};

import {test} from "./teste";
test();
