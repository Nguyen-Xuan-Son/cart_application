import * as typesAction from './../constants/index';

const initialState = localStorage.getItem('CART') ? JSON.parse(localStorage.getItem('CART')) : [];

const myReducer = (state = initialState, action) => {

	switch (action.type) {

		case typesAction.ADD_TO_CART:

			let product = {};
			product.product = action.product;
			product.quantity = 1;
			state.push(product);
			
			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.DELETE_PRODUCT_FROM_CART:
			state.forEach((product, index) => {
				if (product.product.id === action.productId) {
					state.splice(index, 1);
				}
			});

			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.ADD_PRODUCT_IN_CART:

			state.forEach((product, index) => {
				if (product.product.id === action.productId) {
					product.quantity += 1;
				}
			});

			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		case typesAction.SUBTRACT_PRODUCT_IN_CART:

			state.forEach((product, index) => {
				if (product.product.id === action.productId && product.quantity >1) {
					product.quantity -= 1;
				}
			});

			localStorage.setItem('CART', JSON.stringify([...state]));

			return [...state];

		default:
			return [...state];

	}

};

export default myReducer;