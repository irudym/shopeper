import React, { PropTypes } from 'react';

const FormSubmit = ({ id, action, token, children, method, enctype, onSubmit }) => (
  <form
    className="form-horizontal"
    role="form"
    id={id}
    action={action}
    acceptCharset="UTF-8"
    method="post"
    encType={enctype}
    onSubmit={onSubmit}
  >
    <input name="utf8" type="hidden" value="✓" />
    {method === 'patch' ? <input type="hidden" name="_method" value="patch" /> : ''}
    <input type="hidden" name="authenticity_token" value={token} />
    {children}
  </form>
);

FormSubmit.propTypes = {
  id: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  token: PropTypes.string,
  method: PropTypes.string,
  enctype: PropTypes.string,
  onSubmit: PropTypes.func,
};

FormSubmit.defaultProps = {
  token: '',
  method: 'post',
  enctype: null,
  onSubmit: null,
};


export default FormSubmit;
