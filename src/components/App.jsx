import React, { Component } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from 'components/App.module.css';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

import { getImages } from 'api/api';

export class App extends Component {
  state = {
    searchValue: '',
    isLoading: false,
    images: [],
    page: 1
  };

  async componentDidUpdate(_, prevState) {
    const {page, searchValue} = this.state;
    if(prevState.page !== page || prevState.searchValue !== searchValue) {
      this.setState({ isLoading: true });

      getImages(searchValue, page)
      .then(response => this.setState(prev => {
        return {
          images: [...prev.images, ...response.hits],
          totalImages: response.totalImages,
        }
      }))
      .catch(error => console.error(error))
      .finally(this.setState({ isLoading: false }));
    }
  }

  formSubmitHandle = searchValue => {
    this.setState({ searchValue, images: [], page: 1 });
  };

  render () {
    const { images, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandle}/>
        {isLoading && <h1>Завантажуєм...</h1>}
        {images.length > 0 && <ImageGallery images={images}/>}
        {/* <Button/> */}
        <ToastContainer />
      </div>
    );
  }
};
