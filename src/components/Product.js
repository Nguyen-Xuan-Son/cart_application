import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Product extends Component {

    render() {

        const { product } = this.props;

        const elRatings = (ratingNumber) => {

            let temp = [];

            for (var i = 1; i <= ratingNumber; i++) {
                temp.push(<li key={i+5}><i className="fa fa-star"></i></li>);
            };

            if (5 - ratingNumber) {
                for (var j = 1; j <= 5 - ratingNumber; j++) {
                    temp.push(<li key={j}><i className="fa fa-star-o"></i></li>);
                };    
            }

            return temp;
        };
        const showH1 = product.disabled ? <div><h1>1111</h1></div> : "";
        return (
        	<div className={product.disabled ? "disabled col-lg-4 col-md-6 mb-r" : "col-lg-4 col-md-6 mb-r"}>
                {showH1}
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a href="/">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {elRatings(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <button onClick={ () => this.onAddToCard(product) } className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCard = (product) => {
        if (!product.disabled) {
            this.props.onAddToCard(product);
            this.props.onDisabledProductFromProducts(product.id);
        }
    }
}

const mapDispatchToProps = (dispatch, props) => (
    {
        onAddToCard: (product) => {
            dispatch(actions.addToCart(product));
        },
        onDisabledProductFromProducts: (productId) => {
            dispatch(actions.disabledProductFromProducts(productId));
        }
    }
)

export default connect(null, mapDispatchToProps)(Product);
