import * as typesAction from './../constants/index';

const initialState = localStorage.getItem('CART') ? JSON.parse(localStorage.getItem('CART')) : [];

const myReducer = (state = initialState, action) => {

	let { product, quantity, productId } = action;

	switch (action.type) {

		case typesAction.ADD_TO_CART:

			let index = findIndexInState(state, product);

			if (index !== -1) {
				state[index].quantity += 1;
			} else {
				state.push({product, quantity});
			}

			
			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.DELETE_PRODUCT_FROM_CART:
			state.forEach((product, index) => {
				if (product.product.id === productId) {
					state.splice(index, 1);
				}
			});

			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.ADD_PRODUCT_IN_CART:

			state.forEach((product, index) => {
				if (product.product.id === productId) {
					product.quantity += 1;
				}
			});

			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.SUBTRACT_PRODUCT_IN_CART:

			state.forEach((product, index) => {
				if (product.product.id === productId && product.quantity >1) {
					product.quantity -= 1;
				}
			});

			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		default:
			return [...state];

	}

};

const findIndexInState = (state, product) => {
	let index = -1;

	if (state.length) {
		for (let i = 0; i < state.length; i++) {
			if (product.id === state[i].product.id) {
				index = i;
			}
		}
	}

	return index;
}

export default myReducer;