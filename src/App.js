import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import CartsContainer from './containers/CartsContainer';
import Footer from './components/Footer';

class App extends Component {

    render() {
        return (
            <div>
            	<Header />
		        <main id="mainContainer">
		            <div className="container">
		            	<ProductsContainer />
		            	<Message />
		            	<CartsContainer />
		            </div>
		        </main>
		        <Footer />
            </div>
        );
    }
}

export default App;
