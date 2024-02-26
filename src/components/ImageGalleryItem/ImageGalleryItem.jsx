import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal'

function ImageGalleryItem({ url, alt, largeImageURL }) {

    const [showModal, setShowModal] = useState(false);
  
    const onModalShow = () => {
      setShowModal(true);
    };
  
    const onModalClose = () => {
      setShowModal(false);
    };
  
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={url}
            alt={alt}
            onClick={onModalShow}
          />
        </li>
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onModalClose={onModalClose}
          />
        )}
      </>
    );
  }

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;