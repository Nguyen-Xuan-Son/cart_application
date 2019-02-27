import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import * as actionsType from './../constants/index';

class CartItem extends Component {

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

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
                        <label onClick={() => this.onUpdateProductInCart(actionsType.SUBTRACT_PRODUCT_IN_CART, cartItem.product.id)} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <span>—</span>
                        </label>
                        <label onClick={() => this.onUpdateProductInCart(actionsType.ADD_PRODUCT_IN_CART, cartItem.product.id)} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <span>+</span>
                        </label>
                    </div>
                </td>
                <td>{cartItem.product.price * cartItem.quantity}$</td>
                <td>
                    <button onClick={() => this.onDeleteProductFromCart(cartItem.product.id)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onDeleteProductFromCart = (productId) => {
        this.props.onDeleteProductFromCart(productId);
    }

    onUpdateProductInCart = (actionType, productId) => {
        this.props.onUpdateProductInCart(actionType, productId);
    }
}

const mapDispatchToProps = (dispatch, props) => (
    {
        onDeleteProductFromCart: (productId) => {
            dispatch(actions.deleteProductFromCart(productId));
        },
        onUpdateProductInCart: (actionType, productId) => {
            dispatch(actions.updateProductInCart(actionType, productId));
        }
    }
)

export default connect(null, mapDispatchToProps)(CartItem);
