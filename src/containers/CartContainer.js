import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';

class CartContainer extends Component {

    render() {
        const { cart } = this.props;
        const elCartItem = cart.map((cartItem, index) => (
            <CartItem cartItem={ cartItem } key={ index } index={ index }/>
        ))

        return (
            <div>
                <Cart>
                    { elCartItem }
                </Cart>
            </div>
        );
    }

}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                disabled: PropTypes.bool.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
	).isRequired
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(CartContainer);
