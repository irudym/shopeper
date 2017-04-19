//= require jquery
//= require jquery_ujs
// require turbolinks
//= require bootstrap-sprockets
//= require bootstrap-select.min
//= require_tree .


function ready() {
  console.log("READY: Show picker");
  $('.selectpicker').selectpicker('show');
};


$(document).on('turbolinks:load', ready);
