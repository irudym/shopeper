import React, { PropTypes } from 'react';
import ModalView from './modal/modal_view';
import FormDescriptionInput from './form/form_description_input';
import FormButton from './form/form_button';
import Comment from './comment';

const bugDescription = {
  marginBottom: '1rem',
};

const ViewBug = ({ bug, onClose, isOpen, onCommentChange, onComment, comment }) => (
  <ModalView
    title={`View bug: ${bug.title}`}
    onClose={onClose}
    isOpen={isOpen}
    contentLabel="view/edit bug form"
  >
    <div className="row" style={bugDescription} >
      <div className="col-sm-4 col-sm-offset-2">{bug.description}</div>
      {bug.picture ?
        <div className="col-sm-6">
          <div className="thumbnail">
            <img src={bug.picture} alt="screenshot" />
          </div>
        </div>
        :
        ''
      }
    </div>
    <div className="form-horizontal">
      <FormDescriptionInput
        model="bug"
        name="Comment"
        onChange={onCommentChange}
        size={10}
        value={comment}
      />
      <FormButton title="Add comment" onClick={onComment} />
    </div>
    <hr />
    <div>
      {bug.comments.map(item => (
        <Comment key={item.id} text={item.text} date={item.created_at} user={'no user'} />
      ))}
    </div>
  </ModalView>
);

ViewBug.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  bug: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    pictureUrl: PropTypes.string,
    owned: PropTypes.bool,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  comment: PropTypes.string.isRequired,
};

export default ViewBug;
