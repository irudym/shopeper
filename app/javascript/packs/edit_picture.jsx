/**
 * Created by igor rudym on 23/05/2017. (dd/mm/year)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import EditPicture from './components/edit_picture';

const appBlock = document.getElementById('app-block');
const picture = JSON.parse(appBlock.dataset.picture);

ReactDOM.render(
  <EditPicture
    picture={picture}
    action={`/director/pictures/${picture.id}`}
    token={$('meta[name=csrf-token]').attr('content')}
    method="patch"
  />,
  document.getElementById('app-block'),
);
