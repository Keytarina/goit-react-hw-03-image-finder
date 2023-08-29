import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from 'components/App.module.css';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    searchValue: '',
    isLoading: false,
  }

  formSubmitHandle = (data) => {
    this.setState({ searchValue: data.inputValue });
  }

  render () {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandle}/>
        {this.state.isLoading && <h1>Завантажуєм...</h1>}
        {this.state.searchValue && <ImageGallery searchValue={this.searchValue}/>}
        <Button/>
        <ToastContainer />
      </div>
    );
  }
};
