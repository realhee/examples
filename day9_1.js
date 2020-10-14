// day9_1
// 핸드폰 번호 가리기

function solution(phone_number) {
    var answer = '';
    var arr = phone_number.split('');
    for(var i=0; i < arr.length; i++) {
        if (i < arr.length - 4) {
            arr[i] = "*";
        }
    }
    phone_number = arr.join("");
    return phone_number;
}