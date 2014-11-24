import Ember from 'ember';
import renderComponent from '../helpers/render-component';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.Handlebars.registerHelper('render-component', renderComponent);
}

export default {
  name: 'render-component',
  initialize: initialize
};
