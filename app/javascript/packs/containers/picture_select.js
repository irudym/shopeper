import React, { PropTypes, Component } from 'react';
import FormSubmit from '../components/form_submit';
import FileInput from '../components/file_input';
import FormButton from '../components/form_button';
import SelectWithUrl from '../hocs/select_with_url';
import ModalView from '../components/modal/modal_view';
import ShowError from '../components/show_error';

const SelectPictures = SelectWithUrl('/director/pictures.json');

class PictureSelect extends Component {
  constructor(props) {
    super(props);
    // set default state
    this.state = {
      errors: null,
      select: null,
      input: null,
    };
    this.handleAddPicture = this.handleAddPicture.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.validates = this.validates.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  validates() {
    if (this.state.input !== null) {
      // check if the select file is an image
      if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(this.state.input.value)) {
        this.setState({
          errors: 'Unsupported file type',
          input: null,
        });
        return false;
      }
    } else {
      // validates selected picture
      if (this.state.select === null) {
        this.setState({
          errors: 'Select or upload a picture',
        });
        return false;
      }
      if (this.state.select.value.id < 0) {
        this.setState({
          errors: 'Wrong picture selected',
        });
        return false;
      }
    }
    this.setState({
      errors: null,
    });
    return true;
  }

  handleSelect(item) {
    this.setState({
      select: item,
    });
  }

  handleInput(item) {
    this.setState({
      input: item.target,
    });
  }

  handleAddPicture() {
    // if (this.validates())
    {
      const item = this.state.input ? this.state.input : this.state.select;
      if (this.props.onSelect) this.props.onSelect(item);
    }
  }

  handleClose() {
    // set default state
    this.state = {
      errors: null,
      select: null,
      input: null,
    };
    this.props.onClose();
  }

  render() {
    return (
      <ModalView
        isOpen={this.props.isOpen}
        title="Select a picture"
        onClose={this.handleClose}
        contentLabel="image selector"
      >
        {this.state.errors ? <ShowError text={this.state.errors} /> : '' }
        <FormSubmit method={null}>
          <SelectPictures name="picture" onSelect={this.handleSelect} />
          <FileInput
            name="upload"
            onChange={this.handleInput}
            externalId={this.props.picker.inputId}
          />
          <FormButton title="Add picture" onClick={this.handleAddPicture} />
        </FormSubmit>
      </ModalView>
    );
  }
}

PictureSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  externalId: PropTypes.string,
  picker: PropTypes.shape({
    inputId: PropTypes.string,
    selectId: PropTypes.string,
  }).isRequired,
};

PictureSelect.defaultProps = {
  externalId: null,
}

export default PictureSelect;
