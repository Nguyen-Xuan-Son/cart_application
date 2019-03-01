import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './..//components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';
import * as messages from './../constants/Message';

class ProductsContainer extends Component {

    render() {

        const { onAddToCard, onChangeMessage, products } = this.props;

    	const elProducts = products.map((product, index) => {
            return <Product key={ index }
                            product={ product }
                            onChangeMessage={onChangeMessage}
                            onAddToCard={onAddToCard} />
        });

        return (
            <div>
            	<Products>
            		{ elProducts }
            	</Products>
            </div>
        );
    }
}

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
		    id: PropTypes.number.isRequired,
		    name: PropTypes.string.isRequired,
		    image: PropTypes.string.isRequired,
		    description: PropTypes.string.isRequired,
		    price: PropTypes.number.isRequired,
		    inventory: PropTypes.number.isRequired,
		    rating: PropTypes.number.isRequired,
            disabled: PropTypes.bool.isRequired
	  	})
	).isRequired
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = (dispatch, props) => (
    {
        onAddToCard: (product, quantity) => {
            dispatch(actions.addToCart(product, quantity));
        },
        onChangeMessage: () => {
            dispatch(actions.addToCartMessage(messages.MSG_ADD_TO_CART_SUCCESS));
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
