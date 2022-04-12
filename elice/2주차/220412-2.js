// 소수의 합 구하기
// 1부터 200사이의 소수의 합을 구해봅시다.

var sum = 0;

// 1을 제외해야 하기 때문에 2부터 시작
for (var num = 2; num <= 200; num++) {

		// num보다 작거나 같을때까지 반복문 실행
    for (var i = 2; i <= num; i++) {

				// num을 i로 나눈 나머지가 0 이아니라면 반복문을 계속 실행
        if ((num % i) == 0)
        break;
    }
    if (i == num) { // num과 i가 같으면 sum 값에 i를 누적시킵니다.
	    sum += i;
		}
}

document.write(`1이상 200이하의 소수의 합 = ${sum}`);