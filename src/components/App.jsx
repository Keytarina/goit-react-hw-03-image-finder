import React, { Component } from "react";
import axios from "axios";

import css from 'components/App.module.css';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';


const KEY_API = '37101348-01b9475ae8f5d0f542cc9660e';

export class App extends Component {
  state = {
    searchValue: '',
    images: null
  }

  async componentDidMount() {
    // const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchValue}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`);
    fetch(`https://pixabay.com/api/?q=${this.state.searchValue}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json())
    .then(response => this.setState({images: response.hits}));
    ;
  }

  formSubmitHandle = (data) => {
    this.setState({ searchValue: data.inputValue });
  }

  render () {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandle}/>
        {this.state.images && <ImageGallery images={this.state.images}/>}
        <Button/>
      </div>
    );
  }
};
