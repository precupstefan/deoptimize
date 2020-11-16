import {findInterval} from './util';

export const configuration = {
    minSleep: 0, //minimum sleep in ms
    maxSleep: 10000,  // maximum sleep in ms
    intervalSize: 50, //50ms
    referenceDate: new Date(),
    intervals: () => configuration.maxSleep / configuration.intervalSize,
    findInterval: (date: Date): number => {
        const duration = date.getTime() - configuration.referenceDate.getTime();
        const period = duration/ configuration.intervals();
        const interval = (date.getTime()-Date.now())/period;
        return Math.floor(interval);
    }
}
