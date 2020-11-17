import {by, byDate, byDateSync, byHttpRequest, bySync} from './by';


export const deoptimize = function deoptimize() {
    return {
        byDate,
        byDateSync,
        by,
        bySync,
        byHttpRequest
    };
};
