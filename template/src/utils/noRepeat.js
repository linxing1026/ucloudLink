export function noRepeat(arr) {
    if (arr instanceof Array) {
        var newArr = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            let flag = false;
            for (let j = 0, len2 = newArr.length; j < len2; j++) {
                if (JSON.stringify(newArr[j]) == JSON.stringify(arr[i])) {
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    } else {
        throw "noRepeat expect an array as param";
    }
}


