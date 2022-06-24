import React from "react";

class Select extends React.Component { 
    render() {
        const { value, getValueFromTextArea } = this.props
        return (
            <label>
            Selecione
            <select value={value} name="frutas" onChange={getValueFromTextArea}>
                <option value='Manga'>Manga</option>
                <option value='Maça'>Maça</option>
                <option value='Melancia'>Melancia</option>
            </select>
        </label>
        )
    }
}

export default Select;