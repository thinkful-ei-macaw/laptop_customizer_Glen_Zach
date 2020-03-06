import React from 'react';
import slugify from 'slugify';


class ListItem extends React.Component {
    USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    render() {
        console.log(this.props.name)

        const featureHash = this.props.feature + '-' + this.props.idx;
        const options = this.props.feature.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(this.props.name)}
                        checked={item.name === this.props.selected[this.props.name].name}
                        onChange={e => this.props.onUpdateFeature(this.props.name, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({this.USCurrencyFormat.format(item.cost)})
        </label>
                </div>
            );
        });
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.name}</h3>
                </legend>
                {options}
            </fieldset>
        );
    }




}

export default ListItem;