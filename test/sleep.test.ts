import { deoptimize } from "../src";
import { sleep, sleepSync } from "../src/sleep";
const time = 100;

describe("sleep", () => {
    it(`wait ${time}ms`, () => {
        expect.assertions(2);
        const end = new Date(Date.now() + time);
        return sleep(time).then(() => {
            const now = Date.now();
            expect(now).toBeGreaterThanOrEqual(end.getTime()-100);
            expect(now).toBeLessThan(end.getTime()+100);
        });
    });
})

describe("sleepSync", () => {
    it(`wait ${time}ms`, () => {
        const end = new Date(Date.now() + time);
        sleepSync(time);
        expect(Date.now()).toBe(end.getTime());
    })
});