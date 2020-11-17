import {configuration} from './configuration';

export function computeSleepTimeFromDate(date: Date): number {
    if (!(date instanceof Date)) {
        throw TypeError(`Parameter is not of type Date. Found ${typeof date}`);
    }

    const interval = configuration.findInterval(date);
    const time = configuration.maxSleep - interval * configuration.intervalSize;
    return time;
}

export function findInterval(date: Date): number {
    const duration = date.getTime() - configuration.referenceDate.getTime();
    const period = duration / configuration.intervals();
    const interval = (date.getTime() - Date.now()) / period;
    return Math.floor(interval);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function isLucky(chance: number, scale: number) {
    if (chance > scale || chance < 0) {
        throw new RangeError(`The chance argument must be an integer between 0 and ${scale}`);
    }
    chance = Math.floor(chance);
    scale = Math.floor(scale);
    return chance == getRandomInt(scale);
}

export function getSleepTimeFromFunction(fn: () => number | boolean): number {
    const result = fn();
    let sleepTime = 0;
    if (typeof result == "boolean") {
        sleepTime = configuration.maxSleep;
    } else {
        if (result < 0) {
            throw new RangeError("Value must be greater than 0");
        }
        sleepTime = configuration.getFactoredTime(result);
    }
    return sleepTime
}
