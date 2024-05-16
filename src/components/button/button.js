import React from 'react';
import './button.css';

const eventButton = (buttonName) => {
    alert('A label desse botão é: ' + buttonName);
}

const Button = (props) => {
    const handleClick = () => {
        eventButton(props.label);
    };

    return <button className='btn' onClick={handleClick}>{props.label}</button>;
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button
