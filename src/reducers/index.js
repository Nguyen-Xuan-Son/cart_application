import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';

const myReducer = combineReducers({
	products, carts
});

export default myReducer;
