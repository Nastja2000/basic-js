module.exports = function repeater(str, options) {
    const missingStr = String(str) + String(options["addition"]);
    if (options["additionRepeatTimes"] === undefined && options["repeatTimes"] === undefined) {
        return missingStr;
    } else {
        let separator = '';
        if (!options.hasOwnProperty('separator')) {
            separator = '+';
        } else {
            separator = options["separator"];
        }
        let additionalStr = []
        let addStr = String(options["addition"])
        if (options["additionRepeatTimes"] === 1) {
            additionalStr[0] = addStr;
            additionalStr = additionalStr.join();
        } else {
            for (let i = 0; i < options["additionRepeatTimes"]; i++) {
                additionalStr[i] = addStr;
            }
            additionalStr = additionalStr.join(`${options["additionSeparator"]}`)
        }
        let resultStr = [];
        str = String(str);
        str += additionalStr;
        if (options["repeatTimes"] === 1) {
            resultStr[0] = str;
            resultStr = resultStr.join();
        } else {
            for (let i = 0; i < options["repeatTimes"]; i++) {
                resultStr[i] = str;
            }
            resultStr = resultStr.join(`${separator}`)
        }
        return resultStr;
    }
};