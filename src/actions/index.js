import * as constantsType from './../constants/index';

export const addToCart = (product, quantity) => ({ type: constantsType.ADD_TO_CART, product, quantity });

export const deleteProductFromCart = (product) => ({ type: constantsType.DELETE_PRODUCT_FROM_CART, product });

export const updateProductInCart = (type, product) => ({ type, product });

export const updateMessage = (message) => ({ type: constantsType.CHANGE_MESSAGE, message });