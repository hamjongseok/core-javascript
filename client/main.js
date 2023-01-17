
import { 
	diceAnimation, 
	disableElement, 
	enableElement, 
	getNode, 
	getNodes,
	visibleElement,
	invisibleElement,
	insertLast,
	attr,
	clearContents
} from "./lib/index.js";



// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기 
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기 
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기 

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 


// [ 초기화 시키기 ]
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화 
// 3. 스크롤 밑으로 보내기 
// 4. 메모이제이션 패턴 



// 배열의 구조분해 할당
	const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

	const recordListWrapper = getNode('.recordListWrapper')


	let cnt = 0;
	let total = 0;
	function renderRecordListItem() {
		
		let diceValue = +attr('#cube', 'data-dice');	

		let templete = /*html*/`
				<tr>
            <td>${++cnt}</td>
            <td>${diceValue}</td>
            <td>${total += diceValue}</td>
        </tr>
		`
		insertLast('.recordListWrapper tbody', templete)
		recordListWrapper.scrollTop = recordListWrapper.scrollHeight
	}

// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(2)');
// //버튼누르면 콘솔에 찍으라고해서 노드를 먼저연결함 



// 이벤트 

const handlerRollingDice = (() => {

	let stopAnimation;
	let isRolling = false;

	return () => {
	if (!isRolling){
		stopAnimation = setInterval(	diceAnimation, 100);
		disableElement(recordButton);
		disableElement(resetButton)
	}
	else{
		clearInterval(stopAnimation);
		enableElement(recordButton);
		enableElement(resetButton)
	}
	isRolling = !isRolling;
}
})()


const handleRecord = () => {
	visibleElement(recordListWrapper);
	renderRecordListItem();
}

const handleReset = () => {
	invisibleElement(recordListWrapper);
	clearContents('.recordListWrapper tbody' )
	cnt = 0;
	total = 0;
}

recordButton.addEventListener('click',handleRecord)
rollingDiceButton.addEventListener('click',handlerRollingDice)
resetButton.addEventListener('click',handleReset)
