import React, { PropTypes, Component } from 'react';

import ImagePicker from '../components/image_picker';
import PictureSelect from './picture_select';


class ImagePickerGroup extends Component {

  constructor(props) {
    super(props);
    this.showImageSelect = this.showImageSelect.bind(this);
    this.closeImageSelect = this.closeImageSelect.bind(this);
    this.handlePictureSelect = this.handlePictureSelect.bind(this);

    this.state = {
      showModal: false,
      pictureId: null,
      pictureUrls: this.props.pictures,
      pictureValues: [],
      picker: {},
    };
  }

  showImageSelect(pictureId) {
    this.setState({
      showModal: true,
      pictureId,
      picker: {
        inputId: `${this.props.model}_${this.props.names[pictureId]}_file`,
      },
    });
  }

  closeImageSelect() {
    this.setState({
      showModal: false,
    });
  }

  handlePictureSelect(e) {
    console.log('Picture selected: ', e.files);
    this.closeImageSelect();
    // change picture at image_picker
    let reader = new FileReader();
    reader.onload = (res) => {
      let purls = this.state.pictureUrls;
      purls[this.state.pictureId] = res.target.result;
      let pvals = this.state.pictureValues;
      pvals[this.state.pictureId] = e.value;
      console.log("Set value: ",e.value);
      //this.setState({
      //  pictureUrls: purls,
      //});
      console.log("Set picture: ", res.target.result, " to index: ", this.state.pictureId);
    }
    reader.readAsDataURL(e.files[0]);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="name">{'Images'}</label>
          { this.props.names.map((item, index) => (
            <ImagePicker
              name={item}
              size={3}
              image={this.state.pictureUrls[index]}
              onClick={() => (this.showImageSelect(index))}
              model={this.props.model}
              value={this.state.pictureValues[index]}
            />
          ))}
        </div>
        <PictureSelect
          isOpen={this.state.showModal}
          onClose={this.closeImageSelect}
          onSelect={this.handlePictureSelect}
          picker = {this.state.picker}
          id={this.state.pictureId}
          externalId={this.state.externalId}
        />
      </div>
    );
  }
}

ImagePickerGroup.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string),
  model: PropTypes.string.isRequired,
};

ImagePickerGroup.defaultProps = {
  pictures: ['', '', ''],
};


export default ImagePickerGroup;
