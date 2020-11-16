import { sleep, sleepSync } from './sleep';
import { computeSleepTimeFromDate } from './util';

export function byDate(date: Date): Promise<void>{
    const sleepTime = computeSleepTimeFromDate(date);
    return sleep(sleepTime);
}

export function byDateSync(date:Date): void{
    const sleepTime = computeSleepTimeFromDate(date);
    sleepSync(sleepTime);
}
