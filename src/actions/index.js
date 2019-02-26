import constantsType from './../constants/index';

export const addToCart = (product, quantity) => ({ type: constantsType.ADD_TO_CART, product, quantity });
