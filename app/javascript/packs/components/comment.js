import React, { PropTypes } from 'react';
import { colors } from '../styles/common_styles';

const commentHeader = {
  display: 'block',
  fontSize: '0.9rem',
  margin: '0.6rem 0',
  color: colors.colorBrown,
};

const commentUser = {
  fontWeight: 'bold',
  display: 'inline-block',
  marginRight: '1rem',
};

const commentDate = {
  borderLeft: 'solid 2px gray',
  padding: '0 1rem',
  display: 'inline-block',
};

const comment = {
  marginBottom: '2rem',
};

const Comment = ({ text, date, user }) => (
  <div className="row" style={comment}>
    <div className="col-sm-6 col-sm-offset-2">
      <div style={commentHeader}>
        <div style={commentUser}>
          {user}
        </div>
        <div style={commentDate}>
          {date}
        </div>
      </div>
      {text}
    </div>
  </div>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Comment;
