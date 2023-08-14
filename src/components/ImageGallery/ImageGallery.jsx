import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = (galleryItems) => {
    return (
        <ul className={css.ImageGallery}>
            <li className={css.ImageGalleryItem} key='1'>
                <img src="#" alt="" className={css.ImageGalleryItem_image}/>
            </li>
            {/* {galleryItems.map(item => {
                return <ImageGalleryItem key='1' galleryItem='photo'/>
            }
            )} */}
        </ul>
    )
}