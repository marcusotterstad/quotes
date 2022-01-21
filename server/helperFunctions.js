
module.exports.resetIds = function (arr) {
    let newArr = [];
    count = 1;
    for (const obj of arr) {
        obj.id = count;
        newArr.push(obj);
        count += 1;
    }
    return newArr;
}