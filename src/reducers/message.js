import * as typesAction from './../constants/index';
import * as message from './../constants/Message';

const initialState = message.MSG_WELCOME;

const myReducer = (state = initialState, action) => {

	switch (action.type) {

		default:
			return state;

	}

};

export default myReducer;