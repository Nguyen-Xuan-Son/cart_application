import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CartsContainer extends Component {

    render() {
        console.log('this.props.carts', this.props.carts);
        return (
            <div>
            </div>
        );
    }

}

CartsContainer.propTypes = {
	carts: PropTypes.arrayOf(
		PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
	).isRequired
}

const mapStateToProps = state => ({
    carts: state.carts
})

export default connect(mapStateToProps, null)(CartsContainer);
