import React from 'react';
import ListItem from './ListItem';

class Features extends React.Component {

    showFeatures = () => {
        return Object.keys(this.props.features).map((feature, idx) => {
            return (
                <ListItem name={feature} feature={this.props.features[feature]} selected={this.props.selected} onUpdateFeature={this.props.onUpdateFeature}
                    idx={idx} />
            )
        });
    };
    render() {
        return (
            <fieldset className="feature" key={this.featureHash}>
                <legend className="feature__name">
                    <h3>{this.showFeatures()}</h3>
                </legend>
                {/* {this.options} */}
            </fieldset>
        );
    }
}

export default Features;