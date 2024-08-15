import React, { Component } from 'react'
import styled from 'styled-components';

const BoxStyle = styled.div`
  .text {
    text-align:center;
    font-weight: bold;
  }
  .title {
    font-size: 20px;
  }
  .result {
    font-size: 16px;
  }
  .me {
    border: 4px solid green;
    .title, .result {
      color: green;
    }
  }
  .computer {
    border: 4px solid red;
    .title, .result {
      color: red;
    }
  }
  .image {
    width: 640px;
    height: 426px;
  }
`;

export default class Box extends Component {

    render() {
        return (
            <BoxStyle>
                <div className={`${(this.props.title == 'user' ? "me" : "computer")}`}>
                <p className='text title'>{this.props.title}</p>
                <div>
                    <img className='image' src={`game/${this.props.image}.png`} alt='image' />
                    <p className='text result'>{this.props.result}</p>
                </div>  
                </div>      
            </BoxStyle>
        )
    }
}
