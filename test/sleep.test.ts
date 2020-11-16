import { deoptimize } from "../src";
import { sleep, sleepSync } from "../src/sleep";
import { isCurrentTimeCloseTo } from "./helper";
const time = 100;

describe("sleep", () => {
    it(`wait ${time}ms`, () => {
        expect.assertions(2);
        const end = new Date(Date.now() + time);
        return sleep(time).then(() => {
            isCurrentTimeCloseTo(end);
        });
    });
})

describe("sleepSync", () => {
    it(`wait ${time}ms`, () => {
        const end = new Date(Date.now() + time);
        sleepSync(time);
        isCurrentTimeCloseTo(end);
    })
});