import * as typesAction from './../constants/index';
import * as message from './../constants/Message';

const initialState = message.MSG_WELCOME;

const myReducer = (state = initialState, action) => {

	switch (action.type) {

		case typesAction.ADD_TO_CART_SUCCESS:
			state = message.MSG_ADD_TO_CART_SUCCESS;
			return state;

		case typesAction.DELETE_PRODUCT_FROM_CART:
			state = message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;
			return state;

		case typesAction.SUBTRACT_PRODUCT_IN_CART:
			state = message.MSG_UPDATE_CART_SUCCESS;
			return state;

		case typesAction.ADD_PRODUCT_IN_CART:
			state = message.MSG_UPDATE_CART_SUCCESS;
			return state;

		default:
			return state;

	}

};

export default myReducer;