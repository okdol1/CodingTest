// 짝수 반환 함수 만들기

function getOnlyEvenNumber(numArr) {
    let result = []
    for(var i = 0; i < numArr.length; i++) {
        if(numArr[i] % 2 === 0) {
            result.push(numArr[i])
        }
    }
    return result
}