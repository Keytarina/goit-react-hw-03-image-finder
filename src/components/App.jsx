import React, { Component } from "react";
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import imagesAPI from 'api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    searchValue: '',
    isLoading: false,
    error: '',
    images: [],
    page: 1
  };

  async componentDidUpdate(_, prevState) {
    const {page, searchValue} = this.state;
    if(prevState.page !== page || prevState.searchValue !== searchValue) {
      this.setState({ isLoading: true });

      // const data = await getImages(searchValue, page);
      // console.log(data);
      imagesAPI.fetchImages(searchValue, page)
      .then(response => this.setState(prev => {
        return {
          images: [...prev.images, ...response.hits],
          totalImages: response.totalImages,
        } 
      }))
      .catch(error => this.setState({ error })) 
      .finally(this.setState({ isLoading: false }));
    }
  }

  formSubmitHandle = searchValue => {
    this.setState({ searchValue, images: [], page: 1 });
  };

  render () {
    const { images, isLoading, error } = this.state;
    return (
      <div className={css.App}>
        {error && toast.error("Error", {autoClose: 2000})}
        <Searchbar onSubmit={this.formSubmitHandle}/>
        {isLoading && <h1>Завантажуєм...</h1>}
        {images.length > 0 && <ImageGallery images={images}/>}
        {/* <Button/> */}
        <ToastContainer />
      </div>
    );
  }
};
