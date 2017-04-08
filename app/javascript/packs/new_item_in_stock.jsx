/**
 * Created by igor rudym on 07/04/2017
 */
import React from 'react';
import ReactDOM from 'react-dom';
import NewRecord from './containers/new_record';


const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <NewRecord
    malls={JSON.parse(appBlock.dataset.malls)}
    items={JSON.parse(appBlock.dataset.items)}
    sizes={JSON.parse(appBlock.dataset.sizes)}
    colors={JSON.parse(appBlock.dataset.colors)}
  />,
  document.getElementById('app-block'),
);
