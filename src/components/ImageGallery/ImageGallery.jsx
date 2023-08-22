import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images }) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(item => {
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

ImageGalleryItem.propTypes = {
    images: PropTypes.array.isRequired,
};