import Ember from 'ember';

export default function renderComponent(component, options) {

  var helperName;
  if (options.types[0] === "ID") {
    helperName = Ember.Handlebars.get(this, component);
  } else {
    helperName = component;
  }

  var helper = Ember.Handlebars.resolveHelper(options.data.view.container, helperName);
  return helper.call(this, options);
}
