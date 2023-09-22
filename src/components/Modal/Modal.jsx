import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    //Вішаемо слухача на подію 'keydown' при монтуванні компонента модального вікна
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyEsc);
    }
    //Видаляємо слухач на подію 'keydown' при розмонтуванні компонента модального вікна
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyEsc);
    }
    //Метод закриття модального вікна по Escape
    handleKeyEsc = (e) => {
        if(e.code === 'Escape') this.props.closeModal();
    }
    //Метод закриття модального по кліку на backdrop
    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };
    render() {
        return createPortal(
            <div class={css.Overlay} onClick={this.handleBackdropClick}>
                <div class={css.Modal}>{this.props.children}</div>
            </div>,
            modalRoot
        )
    }
}

Modal.propTypes = {
    onCLose: PropTypes.func,
    children: PropTypes.node.isRequired,
};