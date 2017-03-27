import React, { PropTypes, Component } from 'react';
import ReactModal from 'react-modal';

import ImagePicker from '../components/image_picker';

class ImagePickerGroup extends Component {

  constructor(props) {
    super(props);
    this.showImageSelect = this.showImageSelect.bind(this);
    this.closeImageSelect = this.closeImageSelect.bind(this);

    this.state = {
      showModal: false,
    };
  }

  showImageSelect() {
    this.setState({
      showModal: true,
    });
  }

  closeImageSelect() {
    this.setState({
      showModal: false,
    });
  }


  render() {
    return (
      <div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="name">{'Images'}</label>
          { this.props.names.map((item, index) => (
            <ImagePicker
              name={this.props.item}
              size={3}
              image={this.props.images[index]}
              onClick={this.showImageSelect}
            />
          ))}
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.closeImageSelect}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

ImagePickerGroup.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
};

ImagePickerGroup.defaultProps = {
  images: [],
};


export default ImagePickerGroup;
