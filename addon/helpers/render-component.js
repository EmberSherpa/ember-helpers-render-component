import Ember from 'ember';

/**
 * @source: Luke Melia's Gist https://gist.github.com/lukemelia/ec6d03802c6a80ac1c99
 */
export default function renderComponent(name, options) {
  var context = (options.contexts && options.contexts.length) ? options.contexts[0] : this;
  if (options.types[0] === "ID") {
    name = Ember.Handlebars.get(context, name, options);
  }
  var container = options.data.view.container;
  var fullName = 'component:' + name;
  var templateFullName = 'template:components/' + name;
  var templateRegistered = container && container.has(templateFullName);
  if (templateRegistered) {
    container.injection(fullName, 'layout', templateFullName);
  }
  var Component = container.lookupFactory(fullName);

  if (templateRegistered && !Component) {
    container.register(fullName, Ember.Component);
    Component = container.lookupFactory(fullName);
  }

  if (Component) {
    return Ember.Handlebars.helpers.view.call(this, Component, options);
  }
}
