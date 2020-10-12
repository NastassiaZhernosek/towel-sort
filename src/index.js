// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];

    var result = [];
    matrix.forEach((row, i) => {
        i % 2 == 0 ? row.sort((a, b) => a - b) : row.sort((a, b) => b - a);
        result = result.concat(row);
    });
    return result;
};
