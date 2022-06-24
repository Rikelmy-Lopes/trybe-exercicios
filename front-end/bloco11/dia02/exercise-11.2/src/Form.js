import React from "react";
import Select from "./Select";
import TextArea from "./TextArea";

class Form extends React.Component {
    constructor() {
        super()
        this.getValueFromTextArea = this.getValueFromTextArea.bind(this);
        this.erroFound = this.erroFound.bind(this);
        this.erroNoFound = this.erroNoFound.bind(this);

        this.state = {
            frutas: '',
            name: "",
            number: 0,
            password: '',
            checkbox: false,
            formularioComErros: false,
        }
    }

    getValueFromTextArea(event) {
        const { name } = event.target;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

        this.setState({[name]: value})
    }

    erroFound() {
        this.setState({formularioComErros: true})
    }

    erroNoFound() {
        this.setState({formularioComErros: false})
    }

    render() {
        return (
            <div>
                <form>
                    <Select value={this.state.frutas} getValueFromTextArea={this.getValueFromTextArea} />
                    <TextArea  erroNoFound={this.erroNoFound} erroFound={this.erroFound} value={this.state.name} getValueFromTextArea={this.getValueFromTextArea} />
                    <label>
                        Number
                        <input type='number' name="number" onChange={this.getValueFromTextArea}></input>
                    </label>
                    <label>
                        Password
                        <input type='password' name="password" onChange={this.getValueFromTextArea}></input>
                    </label>
                    <label>
                        Check
                        <input type='checkbox' name="checkbox" onChange={this.getValueFromTextArea}></input>
                    </label>
                </form>
            </div>
        );
    }
}

export default Form;