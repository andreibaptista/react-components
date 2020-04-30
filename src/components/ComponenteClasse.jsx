import React, { Component } from 'react'

export default class ComponentClass extends Component {
    render() {
        return (
        <h1>{this.props.valor || 'Padrao'}</h1>
        )
    }
}