export const validItems = () => {
    return this.ssmrService.selfServiceMeterReadings.filter((item) => !!item );
};

// Better
// 1.  3 lines of code vs 11