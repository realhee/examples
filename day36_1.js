// day 36_1
// 튜플

function solution(s) {
    const splitStr = s.split('},{');
    const arrayList =  parseArrayofSort(splitStr);
    return arrayList.length === 1 ?  arrayList : result(arrayList);
}

function parseArrayofSort(objStr){
    if(objStr.length === 1){
        const onething = objStr[0].substring(2, objStr[0].length-2);
        return [+onething];
    }
    const parseArray = [];
    objStr.forEach(v => {
        let value;
        if(v.includes('{{')){
            value = stringToArray(v.substring(2));
        }else if(v.includes('}}')){
            value =stringToArray(v.substring(0, v.length-2));
        }else{
           value = stringToArray(v);
        }
         parseArray.push(value);
    });
    parseArray.sort(function(a, b){
        if(a.length > b.length){
            return 1;
        }else return -1;
    });
    return parseArray;
}

function stringToArray(string){
    return string.split`,`.map(v=> +v);
}

function result(list){
    const resultArray = list.map((v,i,thing) => {
        if(i !== 0 ){
            let value = v.filter(x => !thing[i-1].includes(x))[0];
            return value;
        }else{
            return v[0];
        }
    });
    return resultArray;
}