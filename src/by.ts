import {sleep, sleepSync} from './sleep';
import {computeSleepTimeFromDate} from './util';
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

