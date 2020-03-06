import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (

                <CartItem featureHash={featureHash} selectedOption={selectedOption} feature={feature} />

            )


            // return (
            //     <div>
            //         <div className="summary__option" key={featureHash}>
            //             <div className="summary__option__label">{feature} </div>
            //             <div className="summary__option__value">{selectedOption.name}</div>
            //             <div className="summary__option__cost">
            //                 {this.USCurrencyFormat.format(selectedOption.cost)}
            //             </div>
            //         </div>
            //     </div>


            // );
        });

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        );
    }




}

export default Cart;