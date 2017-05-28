/**
 * Created by igor rudym on 28/05/2017. (dd/mm/year)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import EditPicture from './components/edit_picture';

const appBlock = document.getElementById('app-block');
const picture = JSON.parse(appBlock.dataset.picture);

ReactDOM.render(
  <EditPicture
    picture={picture}
    action="/director/pictures"
    token={$('meta[name=csrf-token]').attr('content')}
    method="post"
  />,
  document.getElementById('app-block'),
);
