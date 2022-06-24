import React, { Component } from "react";
import Dados from "./Dados";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            resumo: '',
            cargo: '',
            descricao: '',
        }
    }

    handleStates = ({target}) => {
        const { name, value } = target;
        this.setState({
            [name]: value,
        })
    }

    cleanState = () => {
        this.setState({
            text: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            resumo: '',
            cargo: '',
            descricao: '',
        })
    }

    render() {
        const { handleStates } = this;
        const { text, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao } = this.state;
        return (
            <form>
                <fieldset>
                    <label>
                        Texto
                    <textarea
                    name="text"
                    maxLength={40}
                    required
                    onChange={handleStates}
                    value={text.toUpperCase()}>
                    </textarea>
                    </label>
                    <label>
                        Email
                        <input
                        name='email'
                        type='email'
                        maxLength={50}
                        required
                        onChange={handleStates}
                        value={email}>
                        </input>
                    </label>
                    <label>
                        CPF
                        <input
                        name="cpf"
                        type='text'
                        maxLength={11}
                        required
                        onChange={handleStates}
                        value={cpf}>
                        </input>
                    </label>
                    <label>
                        Endereco
                        <input name="endereco"
                        type='text'
                        maxLength={200}
                        required
                        onChange={handleStates}
                        value={endereco.replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
                    }>
                        </input>
                    </label>
                    <label>
                        Cidade
                        <input
                        name="cidade"
                        type='text'
                        maxLength={28}
                        required
                        onChange={handleStates}
                        value={cidade}>
                        </input>
                    </label>
                    <label>
                        Estado
                        <select name="estado" onChange={handleStates} value={estado} required>
                        <option value=''>Estados</option>
                            <option value='minas-gerais'>Minas Gerais</option>
                            <option value='sao-paulo'>São Paulo</option>
                            <option value='rio-de-janeiro'>Rio de Janeiro</option>
                            <option value='bahia'>Bahia</option>
                            <option value='espirito-santo'>Espirito Santo</option>
                            <option value='para'>Pará</option>
                        </select>
                    </label>
                    <label value={tipo} htmlFor="casa">
                        Casa
                        <input name="tipo"
                        type='radio'
                        value='casa'
                        id="casa"
                        onChange={handleStates}>
                        </input>
                    </label>
                    <label htmlFor="apartamento" onChange={handleStates}>
                        Apartamento                       
                    <input name="tipo"
                        type='radio'
                        value='apartamento'
                        id="casa">
                        </input>
                    </label>
                </fieldset>
                <br></br>
                <fieldset>
                    <label>
                        Resumo do curriculo
                        <input name="resumo"
                        type='text'
                        maxLength={1000}
                        required
                        onChange={handleStates}
                        value={resumo}>
                        </input>
                    </label>
                    <label>
                        Cargo
                        <input name="cargo"
                        type='text'
                        maxLength={40}
                        required
                        onChange={handleStates}
                        value={cargo}>
                        </input>
                    </label>
                    <label>
                        Descrição do Cargo
                        <input name="descricao"
                        type='text'
                        maxLength={500}
                        required
                        onChange={handleStates}
                        value={descricao}>
                        </input>
                    </label>
                </fieldset>
                <Dados state={this.state}/>
                <button type="button" onClick={this.cleanState}>Limpar</button>
            </form>

        )
    }
}

export default Form;