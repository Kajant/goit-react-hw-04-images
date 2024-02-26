import { useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

function Modal({ largeImageURL, alt, onModalClose }) {

    const onModalCloseFn = event => {
        if (event.code === 'Escape' || event.currentTarget === event.target) {
            onModalClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', onModalCloseFn);

        return () => {
            window.removeEventListener('keydown', onModalCloseFn);
        }
        // eslint-disable-next-line
    }, [])

  return (
    <div className={css.Overlay} onClick={onModalCloseFn}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
}
Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
};

export default Modal;