import {
	SET_TODOS_ALL,
	SET_TODOS_COMPLETE,
	SET_TODOS_ACTIVE
} from './constants.js'	

export const setTodoAll = () => {
		return {
			type: SET_TODOS_ALL,
			payload: true
			// unless you have a function to test if this is true, set the others to false
		}
}

export const setTodoComplete = () => {
		return {
			type: SET_TODOS_COMPLETE,
			payload: true
		}
}

export const setTodoActive = () => {
		return {
			type: SET_TODOS_ACTIVE,
			payload: true
		}
}