/**
 * Created by igor rudym on 09/04/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ViewStock from './containers/view_stock';

const appBlock = document.getElementById('app-block');


ReactDOM.render(
  <ViewStock
    token={$('meta[name=csrf-token]').attr('content')}
    malls={JSON.parse(appBlock.dataset.malls)}
  />,
  document.getElementById('app-block'),
);
