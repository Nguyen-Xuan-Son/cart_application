import React, { Component } from 'react';
import CartResult from './CartResult';

class Carts extends Component {

    render() {
        const { children } = this.props;

        return (
            <div>
            	<section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
	                            {children}
                                <CartResult />
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

export default Carts;
