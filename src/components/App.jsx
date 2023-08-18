import React, { Component } from "react";
import axios from "axios";

import css from 'components/App.module.css';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';


const KEY_API = '37101348-01b9475ae8f5d0f542cc9660e';
// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends Component {
  state = {
    searchValue: '',
    images: {}
  }

  async componentDidMount() {
    const response = await axios.get(`https://pixabay.com/api/?q=cat&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`);
    // fetch(`https://pixabay.com/api/?q=cat&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`)
    this.setState({images: response.data.hits});
  }

  formSubmitHandle = (data) => {
    this.setState({ searchValue: data.inputValue });
  }

  render () {
    const { images } = this.state.images;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandle}/>
        {console.log(this.state.searchValue)}
        {console.log(this.state.images)}
        {this.state.images && <ImageGallery images={images}/>}
        <Button/>
      </div>
    );
  }
};
