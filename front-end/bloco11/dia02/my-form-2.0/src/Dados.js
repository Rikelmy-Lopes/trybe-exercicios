import React, { Component } from "react";

class Dados extends Component {
    render() {
        const { text, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao } = this.props.state;

        return (
            <div>
                <p>Texto: {text}</p>
                <p>Email: {email}</p>
                <p>CPF: {cpf}</p>
                <p>Endereço: {endereco}</p>
                <p>Cidade: {cidade}</p>
                <p>Estado: {estado}</p>
                <p>Residencia: {tipo}</p>
                <p>Resumo: {resumo}</p>
                <p>Cargo: {cargo}</p>
                <p>Descrição: {descricao}</p>
            </div>
        )
    }
}

export default Dados;