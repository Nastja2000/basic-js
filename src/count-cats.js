module.exports = function countCats(matrix) {
    let cat = '^^';
    let countOfCats = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === cat) countOfCats++;
        }
    }
    return countOfCats;
};