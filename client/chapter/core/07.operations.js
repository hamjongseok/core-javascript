/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = "10";
let b = "30";

// 단항 연산자 -> 피연산자 개수가 1개 
let unary = +a; 
// +a하면 형변환이 일어남

// 이항 연산자 -> 피연산자 개수가 2개
let binary = a + b;

// 삼항 연산자 -> 피연산자 개수가 3개
let ternary = Math.random() > 0.5 ? 'Big' : 'Small';

// 산술 연산자: 덧셈
let addition;

// 산술 연산자: 뺄셈
let subtraction;

// 산술 연산자: 곱셈
let multiplication;

// 산술 연산자: 나눗셈
let division;

// 산술 연산자: 나머지
let remainder;

// 산술 연산자: 거듭 제곱
let power;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
// [1,2,34,5,6] 이렇게나옴 
let newArray = [1,2,3].concat([4,5,6]);
// [1,2,3,4,5,6] 제대로 나옴 


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?


let admin = prompt("입력하세요",0);

if (admin == "admin")
{
	alert("Password?")
}

else if(admin == null)
{
	alert("취소되었습니다")
}