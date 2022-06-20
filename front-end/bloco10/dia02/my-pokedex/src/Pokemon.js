import React from "react";

import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        return(
            <div className="pokemon">
                <h1>Nome: {this.props.name}</h1>
                <p>Tipo: {this.props.type}</p>
                <p>Peso Medio: {this.props.averageWeight + this.props.measurementUnit}</p>
                <img src={this.props.image} alt={this.props.name}></img>
            </div>
        );
    }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Pokemon;