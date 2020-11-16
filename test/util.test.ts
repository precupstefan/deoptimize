import { configuration } from "../src/configuration";
import { computeSleepTimeFromDate, findInterval } from "../src/util"

describe("util.ts", () => {

    beforeEach(() => {
        jest.resetModules()
    });


    describe("computeSleepTimeFromDate", () => {
        it("should throw if other format than date is provided", () => {
            //@ts-ignore
            expect(()=>computeSleepTimeFromDate(123)).toThrow(TypeError);
        });

    })

    describe("findInterval", () => {
        it("should find interval", () => {
            const now = new Date();
            const time = 1000;
            configuration.referenceDate = new Date(now.getTime()-time);
            configuration.intervals = () => 10;
            let interval = findInterval(new Date(now.getTime()+time));
            expect(interval).toBe(5);
            interval = findInterval(new Date(now.getTime()+time-1));
            expect(interval).toBe(4);
        });
    })
})