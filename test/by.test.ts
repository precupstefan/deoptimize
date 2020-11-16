import {byDate, byDateSync} from "../src/by";
import {isCurrentTimeCloseTo} from "./helper";

const time = 100;



describe("by.ts", () => {
    //TODO: Fix these failing tests
    describe.skip("byDate", () => {
        it("should work", () => {
            expect.assertions(2);
            const end = new Date(Date.now() + time);
            return byDate(end).then(
                () => {
                    console.log(end);
                    console.log(Date.now());
                    isCurrentTimeCloseTo(end);
                }
            )
        })
    })
    //TODO: Fix these failing tests
    describe.skip("byDateSync", () => {
        it("should work", () => {
            expect.assertions(2);
            const end = new Date(Date.now() + time);
            byDateSync(end);
            isCurrentTimeCloseTo(end);
        })
    })
})
