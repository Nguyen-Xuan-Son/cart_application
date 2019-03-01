import * as typesAction from './../constants/index';
import * as message from './../constants/Message';

const initialState = message.MSG_WELCOME;

const myReducer = (state = initialState, action) => {

	switch (action.type) {

		case typesAction.CHANGE_MESSAGE:
			state = message.MSG_ADD_TO_CART_SUCCESS;
			return state;

		default:
			return state;

	}

};

export default myReducer;