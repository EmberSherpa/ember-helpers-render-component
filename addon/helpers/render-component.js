import Ember from 'ember';

export default function renderComponent(component, options) {
  var helper = Ember.Handlebars.resolveHelper(options.data.view.container, component);
  return helper.call(this, options);
}
