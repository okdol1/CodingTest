// 문자열 거꾸로 출력하기
// reverse() 함수를 정의하세요.

function reverse(str) {
    let reverStr = ''
    for(var i = str.length -1; i >= 0; i-- ) {
        reverStr += str.charAt(i)
    }
    return reverStr
    
}

// 채점을 위한 코드입니다.
document.write(reverse("Nice to meet you"));