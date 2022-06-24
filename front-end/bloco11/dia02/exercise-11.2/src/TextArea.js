import React from "react";

class TextArea extends React.Component { 
    render() {
        const { value, getValueFromTextArea, erroFound, erroNoFound } = this.props
        let error = undefined;
        if (value.length > 40) {
            error = 'Nome muito grande';
            erroFound();
        }
        if (value.length < 40) {
        }
        return (
            <label>
            Digite seu nome
            <textarea name="name" value={value} onChange={getValueFromTextArea}></textarea>
            <span style={{ backgroundColor: 'red' }}>{error !== undefined ? error : ''}</span>
        </label>
        )
    }
}

export default TextArea;
