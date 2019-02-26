const initialState = [
	{
		id: 1,
		name: 'Nokia 1',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/black/iphone7-black-select-2016?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430037379',
		description: 'Talk your way! Nokia 1',
		price: 500,
		inventory: 10,
		rating: 4
	},
	{
		id: 2,
		name: 'Nokia 2',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/rosegold/iphone7-rosegold-select-2016?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430205982',
		description: 'Talk your way! Nokia 2',
		price: 3500,
		inventory: 60,
		rating: 5
	},
	{
		id: 3,
		name: 'Nokia 3',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiStmezfXAn85x4nFUGmsB8AzluwvnPheDdwa9uuVKYNV5qli',
		description: 'Talk your way! Nokia 3',
		price: 4500,
		inventory: 20,
		rating: 3
	}
];

const myReducer = (state = initialState, action) => {

	switch (action.type) {

		default:
			return [...state];

	}

};

export default myReducer;