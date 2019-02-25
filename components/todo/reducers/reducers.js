import {
	SET_TODOS_ALL,
	SET_TODOS_COMPLETE,
	SET_TODOS_ACTIVE
} from './constants.js'


const initialFooterState = {
	all: true,
  	active: false,
  	completed: false,
}


export const setFooter = (state=initialFooterState, action={}) => {
	switch(action.type) {
	case SET_TODOS_ALL:
		return Object.assign({}, state, { all: action.payload ()});
	case SET_TODOS_COMPLETE:
		return Object.assign({}, state, { complete: action.payload ()});
	case SET_TODOS_ACTIVE:
		return Object.assign({}, state, { active: action.payload ()});	
		

	default:
		return state;
	}
}

