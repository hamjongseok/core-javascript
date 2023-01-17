import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";


/**
 * 
 * @param {*} node 
 */

export function disableElement(node) {

	if ( !isElement(node)){
		typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
	}
	node.disabled = true;
}

export function enableElement(node) {

	if ( !isElement(node) ){
		typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
	}
	node.disabled = false;
}

//보이는거
export function visibleElement(node) {

	if ( !isElement(node) ){
		typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
	}
	node.hidden = false;
}

//안보이는거
export function invisibleElement(node) {

	if ( !isElement(node) ){
		typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
	}
	node.hidden = true
}
