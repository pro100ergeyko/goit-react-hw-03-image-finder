import React, { Component } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

import { Container } from './Container.styled';
import { Searchbar } from './Searchbar/Searchbar';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// onSubmit={}

export class App extends Component {
  // const API_KEY = '37960229-568719668cd9d6c687eddc6ce';
  render() {
    return (
      <Container>
        <Searchbar />

        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </Container>
    );
  }
}
