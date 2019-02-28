import React, { Component } from 'react';

class CartResult extends Component {

    render() {

        const { cart } = this.props;

        return (
        	<tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalMount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }

    showTotalMount = (cart) => {
        let result = 0;

        if (cart.length) {
            cart.forEach((product) => {
                result += (product.quantity * product.product.price); 
            })
        }
        return result;
    }

}

export default CartResult;
