import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PropTypesCom extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        const {name,age,names} = this.props;
        return (
            <div>
                <h5>name: {name}</h5>
                <h5>age: {age}</h5>
                <h5>names: {names}</h5>
            </div>
        )
    }
}
PropTypesCom.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    names: PropTypes.array
}

PropTypesCom.defaultProps = {
    age: 18
}
