export function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function sleepSync(ms:number){
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + ms) {
        ;
    }
}