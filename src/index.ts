import {by, byDate, byDateSync, bySync} from './by';


export const deoptimize = function deoptimize() {
    return {
        byDate,
        byDateSync,
        by,
        bySync
    }
};
