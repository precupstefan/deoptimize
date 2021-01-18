// import {byDateSync} from "./by";

import {deoptimize} from "./index";

export function test() {
    console.log("Ceva");
    const start = new Date(Date.now() + 1000);
    deoptimize().by.
    const end = Date.now();
    console.log(end - start.getTime())
}
