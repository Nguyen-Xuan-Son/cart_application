import * as typesAction from './../constants/index';

const initialState = localStorage.getItem('CART') ? JSON.parse(localStorage.getItem('CART')) : [];

const myReducer = (state = initialState, action) => {

	let { type, product, quantity } = action;
	let index = findIndexInState(state, product);

	switch (action.type) {


		case typesAction.ADD_TO_CART:

			if (index !== -1) {
				state[index].quantity += 1;
			} else {
				state.push({product, quantity});
			}
			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.DELETE_PRODUCT_FROM_CART:
			state.splice(index, 1);
			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.ADD_PRODUCT_IN_CART:
			state[index].quantity += 1;
			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.SUBTRACT_PRODUCT_IN_CART:
			if (state[index].quantity > 0) {
				state[index].quantity -= 1;
			} else {
				state.splice(index, 1);
			}
			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		default:
			return [...state];

	}

};

const findIndexInState = (state, product) => {
	let index = -1;

	if (state.length && product) {
		for (let i = 0; i < state.length; i++) {
			if (product.id === state[i].product.id) {
				index = i;
			}
		}
	}

	return index;
}

export default myReducer;