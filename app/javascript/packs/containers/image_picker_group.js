import React, { PropTypes, Component } from 'react';

import PicturePicker from '../components/picture/picture_picker';
import ShowErrors from '../components/show_errors';
import ClearButton from '../components/picture/clear_button';

const pickersRow = {
  paddingLeft: 0,
};



class ImagePickerGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      pictures: [...this.props.pictures],
      values: ['', null, null],
      pickerIndex: null,
      keys: [1000, 2000, 3000],           //I'm not sure that some one going to clear picture many times; more that 1000 times!
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.validatesFile = this.validatesFile.bind(this);
  }

  handleChange(e) {
    if (this.validatesFile(e.target.value)) {
      const values = [...this.state.values];
      values[this.state.pickerIndex] = e.target.value;

      const reader = new FileReader();
      reader.onload = (res) => {
        const pictures = [...this.state.pictures];
        pictures[this.state.pickerIndex] = res.target.result;
        this.setState({
          pictures,
          // values,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  handleClick(pickerIndex) {
    this.setState({
      pickerIndex,
    });
  }

  handleClear(index) {
    const values = [...this.state.values];
    const pictures = [...this.state.pictures];
    const keys = [...this.state.keys];
    pictures[index] = '';
    values[index] = '';
    keys[index] += 1;
    this.setState({
      pictures,
      values,
      keys,
    });
  }

  validatesFile(fileName) {
    if (fileName === '') return true;
    if (fileName !== '' && !(/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileName)) {
      this.setState({
        errors: ['Unsupported file type'],
      });
      return false;
    }
    this.setState({
      errors: null,
    });
    return true;
  }

  render() {
    return (
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="name">{'Images'}</label>
        <div className="col-sm-7" style={pickersRow}>
          {this.state.errors ? <ShowErrors errors={this.state.errors} /> : ''}
          {this.props.names.map((item, index) => (
            <div>
              <PicturePicker
                name={item}
                size={4}
                imageUrl={this.state.pictures[index]}
                model={this.props.model}
                onClick={() => (this.handleClick(index))}
                onChange={this.handleChange}
                onClear={() => (this.handleClear(index))}
                inputKey={this.state.keys[index]}
              />
            </div>
          ))}
        </div>
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
