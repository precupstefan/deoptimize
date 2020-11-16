import {byDate, byDateSync} from "../src/by";
import {isCurrentTimeCloseTo} from "./helper";

const time = 100;


// TODO: Fix these failing tests
// describe("by.ts", () => {
//     describe("byDate", () => {
//         it("should work", () => {
//             expect.assertions(2);
//             const end = new Date(Date.now() + time);
//             return byDate(end).then(
//                 () => {
//                     console.log(end);
//                     console.log(Date.now());
//                     isCurrentTimeCloseTo(end);
//                 }
//             )
//         })
//     })
//
//     describe("byDateSync", () => {
//         it("should work", () => {
//             expect.assertions(2);
//             const end = new Date(Date.now() + time);
//             byDateSync(end);
//             isCurrentTimeCloseTo(end);
//         })
//     })
// })
