import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, altText }) => {
    return (
        <li className={css.ImageGalleryItem} key={id}>
            <a className={css.ImageGalleryItem_link} href={largeImageURL}>
                <img src={webformatURL} alt={altText} className={css.ImageGalleryItem_image}/>
    		</a>
        </li>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};