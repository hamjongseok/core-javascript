
//1. 인풋 벨류값 가져오기
// 음...input의 값을 어케 가져오지? .value ? 
// ㄷ ㄷ 어케하는거여 
let resultFirst = getNode('#firstNumber');
let resultSecond = getNode('#secondNumber');




//2. 이벤트 핸들러 연결하기 

function handler(e){
	e.preventDefault();
	let cal;

	cal = resultFirst.value + resultSecond.value;
	//아하 이렇게했더니 문자로 나온다, 숫자로 받아줘야하는데 어떻게해야할까 ? 
	

	//한가지더 문제점 더한 cal의값을 result의 위치에 띄워줘야 하는데 어떻게해야하는거지 ?  
	console.log(cal);
}


done.addEventListener('click',handler);


//3. 이벤트 기본동작 차단하기
//4. 두 수의 합을 더해주기
//5. 화면에 출력하기 


