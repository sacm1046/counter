import React from 'react';


class CardNumber extends React.Component{ 
    render(){
        return (
        <h1>{this.props.number}</h1>
        );
    }
}

export default CardNumber;