import Ember from 'ember';
import { initialize } from 'ember-helpers-render-component/initializers/render-component';
import renderComponent from 'ember-helpers-render-component/helpers/render-component';

var container, application;

module('RenderComponentInitializer', {
  setup: function() {
    Ember.run(function() {
      container = new Ember.Container();
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('is registered', function() {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  equal(Ember.Handlebars.helpers['render-component'], renderComponent);
});

