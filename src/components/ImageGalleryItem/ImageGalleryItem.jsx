import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = (key, galleryItem) => {
    return (
        <li className={css.ImageGalleryItem} key={key}>
            <img src="" alt="" className={css.ImageGalleryItem_image}/>
            {galleryItem}
        </li>
    )
}