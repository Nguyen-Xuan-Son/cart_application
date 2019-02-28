import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';

class CartContainer extends Component {

    

    render() {
        const { cart } = this.props;

        return (
            <Cart>
                { this.showCartItem(cart) }
                <CartResult cart={cart}/>
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let elCartItem = 'Empty cart!';

        elCartItem = cart.map((cartItem, index) => (
            <CartItem cartItem={ cartItem } key={ index } index={ index }/>
        ));
        return elCartItem;
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
