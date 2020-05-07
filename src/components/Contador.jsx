import React, {Component} from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.alteraNumero(1)
        // this.setState({numero: this.state.numero + 1})
    }

    menosUm = () => {
        this.alteraNumero(-1)
        // this.setState({numero: this.state.numero - 1})
    }

    alteraNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alteraNumero(10)}>Inc</button>
                <button onClick={() => this.alteraNumero(-10)}>Dec</button>

            </div>
        )
    }
}