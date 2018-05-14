//根据对象的属性分组(key,arr)    key是属性值 arr是数组对象
export function groupTwo(key, arr) {
    let map = {}, dest = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i][key]]) {
            dest.push({
                [key]: arr[i][key],
                data: [arr[i]]
            });
            map[arr[i][key]] = arr[i];
        } else {
            for (let j = 0; j < dest.length; j++) {
                var dj = dest[j];
                if (dj[key] == arr[i][key]) {
                    dj.data.push(arr[i]);
                    break;
                }
            }
        }
    }
    return dest
}