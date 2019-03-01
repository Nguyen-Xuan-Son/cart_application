import React, { Component } from 'react';
import * as actionsType from './../constants/index';

class CartItem extends Component {

    render() {

        const { cartItem } = this.props;

        return (
        	<tr>
                <th scope="row">
                    <img src={cartItem.product.image}
                        alt={cartItem.product.description} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty"> {cartItem.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => this.onUpdateProductInCart(actionsType.SUBTRACT_PRODUCT_IN_CART, cartItem)} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <span>—</span>
                        </label>
                        <label onClick={() => this.onUpdateProductInCart(actionsType.ADD_PRODUCT_IN_CART, cartItem)} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <span>+</span>
                        </label>
                    </div>
                </td>
                <td>{cartItem.product.price * cartItem.quantity}$</td>
                <td>
                    <button onClick={() => this.onDeleteProductFromCart(cartItem)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onDeleteProductFromCart = (product) => {
        this.props.onDeleteProductFromCart(product);
    }

    onUpdateProductInCart = (actionType, product) => {
        this.props.onUpdateProductInCart(actionType, product);
    }
}

export default CartItem;
