import * as typesAction from './../constants/index';

const data = JSON.parse(localStorage.getItem('CART'));

const initialState = [
	{
		product: {
			id: 1,
			name: 'Nokia 1',
			image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/black/iphone7-black-select-2016?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430037379',
			description: 'Talk your way! Nokia 1',
			price: 500,
			inventory: 10,
			rating: 4
		},
		quantity: 5
	}
] || data;

const myReducer = (state = initialState, action) => {

	switch (action.type) {

		case typesAction.ADD_TO_CART:
			return [...state];
		default:
			return [...state];

	}

};

export default myReducer;