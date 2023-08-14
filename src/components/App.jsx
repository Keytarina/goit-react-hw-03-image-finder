import React, { Component } from "react";

import css from 'components/App.module.css';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {

  render () {
    return (
      <div className={css.App}>
        tctgcjtc
        <Searchbar/>
        <ImageGallery/>
        <Button/>
      </div>
    );
  }
};
