import React, { Component } from "react";

import css from 'components/App.module.css';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    searchValue: ''
  }

  formSubmitHandle = (data) => {
    this.setState({ searchValue: data.inputValue });
  }

  render () {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandle}/>
        {console.log(this.searchValue)}
        <ImageGallery/>
        <Button/>
      </div>
    );
  }
};
