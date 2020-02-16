const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const SOME_CONSTANT = 0.693;
module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== 'string' || sampleActivity.length === 0 || typeof(Number(sampleActivity)) !== 'number')
        return false;
    if (Number(sampleActivity) > 15 || Number(sampleActivity) <= 0)
        return false;
    sampleActivity = parseFloat(sampleActivity);
    if (typeof(sampleActivity) !== 'number' || isNaN(Number(sampleActivity)))
        return false;
    sampleActivity = parseFloat(sampleActivity);
    let koeff = SOME_CONSTANT / HALF_LIFE_PERIOD;
    let relation = MODERN_ACTIVITY / sampleActivity;
    let elapsedTime = Math.ceil(Math.log(relation) / koeff);
    return elapsedTime;
};