import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './..//components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {

    render() {

    	const elProducts = this.props.products.map((product, index) => {
            return <Product key={ index } product={ product } />
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

export default connect(mapStateToProps, null)(ProductsContainer);
