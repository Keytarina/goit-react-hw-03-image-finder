import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, altText, onClick  }) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img 
                src={webformatURL} 
                alt={altText} 
                className={css.ImageGalleryItem_image}
                onClick={() => onClick(largeImageURL, altText)}
            />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};