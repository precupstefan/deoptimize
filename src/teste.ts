import {byDateSync} from "./by";

export function test() {
    console.log("Ceva");
    const start = new Date(Date.now() + 1000);
    byDateSync(start);
    const end = Date.now();
    console.log(end - start.getTime())
}
