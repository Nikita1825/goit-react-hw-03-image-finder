import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    visible: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    const { visible } = this.state;
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt=""
          onClick={this.toggleModal}
        />
        {visible && (
          <Modal
            tags={tags}
            largeImageURL={largeImageURL}
            onCloseModal={this.toggleModal}
          />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
