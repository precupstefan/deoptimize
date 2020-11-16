import { byDate, byDateSync } from "../src/by";
import { isCurrentTimeCloseTo } from "./helper";

const time = 100;

describe("by.ts", () => {
    describe("byDate", () => {
        it("should work", () => {
            expect.assertions(2);
            const end = new Date(Date.now() + time);
            return byDate(end).then(
                () => {
                    isCurrentTimeCloseTo(end);
                }
            )
        })
    })

    describe("byDateSync", () => {
        it("should work", () => {
            expect.assertions(2);
            const end = new Date(Date.now() + time);
            byDateSync(end);
            isCurrentTimeCloseTo(end);
        })
    })
})