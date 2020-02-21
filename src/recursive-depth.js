let counter = 0;
module.exports = class DepthCalculator {
    calculateDepth(arr, level = 1, arrOfDepthLevels = []) {

        arrOfDepthLevels.push(level);
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) this.calculateDepth(arr[i], level + 1, arrOfDepthLevels);
        }
        counter = Math.max(...arrOfDepthLevels);
        return counter;

    }
}