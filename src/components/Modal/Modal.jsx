import * as basicLightbox from 'basiclightbox'
import css from './Modal.module.css';

export const Modal = () => {
    return (
        <div class={css.Overlay}>
            <div class={css.Modal}>
                <img src="" alt="" />
            </div>
        </div>
    )
}