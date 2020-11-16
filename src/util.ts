import { configuration } from './configuration';

export function computeSleepTimeFromDate(date: Date): number{
    if(!(date instanceof Date)){
        throw TypeError(`Parameter is not of type Date. Found ${typeof date}`);
    }

    const interval = configuration.findInterval(date);
    const time = configuration.maxSleep-interval*configuration.intervalSize;
    console.log(time)
    return time;
}

export function findInterval(date: Date): number {
    const duration = date.getTime() - configuration.referenceDate.getTime();
    const period = duration/ configuration.intervals();
    const interval = (date.getTime()-Date.now())/period;
    return Math.floor(interval);
}