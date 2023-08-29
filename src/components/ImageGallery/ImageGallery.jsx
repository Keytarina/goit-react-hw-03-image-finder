import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

const KEY_API = '37101348-01b9475ae8f5d0f542cc9660e';

export class ImageGallery extends Component {
    state = { 
        images: null,
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        // const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchValue}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`);
        
        setTimeout(() => {
          fetch(`https://pixabay.com/api/?q=${this.props.searchValue}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`)
          .then(response => response.json())
          .then(response => this.setState({images: response.hits}))
          .finally(this.setState({ isLoading: false }));
        }, 1000);
        
    }

    render () {
        return (
            <ul className={css.ImageGallery}>
                {this.state.images && this.state.images.map(item => {
                    return <ImageGalleryItem 
                            key={item.id} 
                            id={item.id}
                            webformatURL={item.webformatURL} 
                            largeImageURL={item.largeImageURL} 
                            altText={item.tags}
                            />
                }
                )}
            </ul>
        )
    }
}

ImageGalleryItem.propTypes = {
    searchValue: PropTypes.string,
    images: PropTypes.array,
};