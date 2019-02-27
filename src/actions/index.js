import * as constantsType from './../constants/index';

export const addToCart = (product) => ({ type: constantsType.ADD_TO_CART, product });

export const disabledProductFromProducts = (productId) => ({ type: constantsType.DISABLED_PRODUCT_FROM_PRODUCTS, productId });

export const deleteProductFromCart = (productId) => ({ type: constantsType.DELETE_PRODUCT_FROM_CART, productId });

export const updateProductInCart = (type, productId) => ({ type, productId });