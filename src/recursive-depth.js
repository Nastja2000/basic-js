//let arrOfDepthLevels = [];
let counter = 0;
module.exports = class DepthCalculator {
    calculateDepth(arr, level = 1, arrOfDepthLevels = []) {

        arrOfDepthLevels.push(level);
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) this.calculateDepth(arr[i], level + 1, arrOfDepthLevels);
        }
        //counter = Math.max(...arrOfDepthLevels);
        /* counter = arrOfDepthLevels[0];
        for (let i = 1; i < arrOfDepthLevels.length; i++) {
            if (arrOfDepthLevels[i] > counter) {
                counter = arrOfDepthLevels[i];
            }
        } */
        counter = Math.max(...arrOfDepthLevels);
        return counter;

    }
}