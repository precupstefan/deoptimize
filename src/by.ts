import {sleep, sleepSync} from './sleep';
import {computeSleepTimeFromDate, getRandomInt, getSleepTimeFromFunction, isLucky} from './util';
import {configuration} from "./configuration";
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

export function byDate(date: Date): Promise<void> {
    const sleepTime = computeSleepTimeFromDate(date);
    return sleep(sleepTime);
}

export function byDateSync(date: Date): void {
    const sleepTime = computeSleepTimeFromDate(date);
    sleepSync(sleepTime);
}

export function by(factor: number): Promise<void> {
    const sleepTime = configuration.getFactoredTime(factor);
    return sleep(sleepTime);
}

export function bySync(factor: number): void {
    const sleepTime = configuration.getFactoredTime(factor);
    sleepSync(sleepTime);
}

export function byHttpRequest(config: AxiosRequestConfig,
                              validationFunction: (data: AxiosResponse) => number,
                              error?: (data: AxiosError) => number): Promise<void> {
    return axios(config).then((response) => {
        const factor = validationFunction(response);
        const sleepTime = configuration.getFactoredTime(factor);
        return sleep(sleepTime);
    }).catch((errorResponse) => {
            let factor = 0;
            if (error !== undefined) {
                factor = error(errorResponse);
            }
            const sleepTime = configuration.getFactoredTime(factor);
            return sleep(sleepTime);
        }
    );
}


export function byChance(chance: number, scale: number = 100): Promise<void> {
    const sleepTime = isLucky(chance, scale) ? configuration.maxSleep : 0;
    return sleep(sleepTime);
}

export function byChanceSync(chance: number, scale: number = 100): void {
    const sleepTime = isLucky(chance, scale) ? configuration.maxSleep : 0;
    return sleepSync(sleepTime);
}

export function byRussianRoulette(choice: number = 3): Promise<void> {
    return byChance(choice, 6);
}

export function byRussianRouletteSync(choice: number = 3): void {
    return byChanceSync(choice, 6);
}

export function byFunction(fn: () => number | boolean): Promise<void> {
    const sleepTime = getSleepTimeFromFunction(fn);
    return sleep(sleepTime);
}

export function byFunctionSync(fn: () => number | boolean): void {
    const sleepTime = getSleepTimeFromFunction(fn);
    return sleepSync(sleepTime);
}

// ideas
/*

    ##TIME BASED
    byDayOfWeek
    byHourOfDay
    byMonth
    byDay


    ##UNTIL
 */
