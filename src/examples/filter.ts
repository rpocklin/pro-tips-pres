export const validItems = () => {
    const selfServiceMeterReadings = [];

    for (const item of this.ssmrService.selfServiceMeterReadings) {
        if (item) {
            selfServiceMeterReadings.push(item);
        }
    }

    return selfServiceMeterReadings;
};