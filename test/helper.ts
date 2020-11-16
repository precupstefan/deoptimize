export function isCurrentTimeCloseTo(date: Date){
    const now = Date.now();
    expect(now).toBeGreaterThanOrEqual(date.getTime()-100);
    expect(now).toBeLessThan(date.getTime()+100);
}