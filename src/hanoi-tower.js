const SECONDS_IN_HOUR = 3600;
const SOME_CONST = 2;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    turnsSpeed /= SECONDS_IN_HOUR;
    let turns = Math.pow(SOME_CONST, disksNumber) - 1;
    let seconds = turns / turnsSpeed;
    let result = {};
    result.turns = turns;
    result.seconds = seconds;
    return result;
}