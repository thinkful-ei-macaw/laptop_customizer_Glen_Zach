import React from 'react';

class CartItem extends React.Component {

    USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    render() {

        return (
            <div>
                <div className="summary__option" key={this.props.featureHash}>
                    <div className="summary__option__label">{this.props.feature} </div>
                    <div className="summary__option__value">{this.props.selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {this.USCurrencyFormat.format(this.props.selectedOption.cost)}
                    </div>
                </div>
            </div>
        );

    }




}

export default CartItem;