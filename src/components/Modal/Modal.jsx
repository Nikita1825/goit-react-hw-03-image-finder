import { Component } from "react";


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
    
      this.props.onCloseModal();
  };
    render() {
      const { largeImageURL, tags } = this.props;
    return (
      <div className="Overlay" onClick={this.handelOverlayClick}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
