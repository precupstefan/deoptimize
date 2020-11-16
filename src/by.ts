import {sleep, sleepSync} from './sleep';
import {computeSleepTimeFromDate} from './util';
import {configuration} from "./configuration";
import * as http from "http";

export function byDate(date: Date): Promise<void> {
    const sleepTime = computeSleepTimeFromDate(date);
    return sleep(sleepTime);
}

export function byDateSync(date: Date): void {
    const sleepTime = computeSleepTimeFromDate(date);
    sleepSync(sleepTime);
}

export function by(factor: number): Promise<void> {
    const sleepTime = factor * configuration.intervalSize;
    return sleep(sleepTime);
}

export function bySync(factor: number): void {
    const sleepTime = factor * configuration.intervalSize;
    sleepSync(sleepTime);
}

