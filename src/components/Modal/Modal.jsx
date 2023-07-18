import { Component } from "react";
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handelOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };
    render() {
      const { largeImageURL} = this.props;
    return (
      <div className="Overlay" onClick={this.handelOverlayClick}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  
};
export default Modal;
