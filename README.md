# ember-helpers-render-component

Ember Helper that allows you to render a component by specifying the component's name. Any parameters bound to the helper will automatically be bound to the component.

```handlebars
{{render-component 'async-button' action='save'}}
```

## Installation

* `npm install --save-dev ember-helpers-render-component`

## Running Tests

* `ember test`
* `ember test --server`

## Dynamic components example

Here we are rendering a dashboard containing a dynamic set of widgets sent back from the server. Assuming our route returns an array of widgets our dashboard should display as its model:

```handlebars
{{#each widget in model}}
  {{render-component widget.type}}
{{/each}}
```

The above will look for a component with the name assigned to each widget's 'type' property and render it.

Note: in Ember 2.0 the route in this example would set the array of widgets as an attribute of a routable component.
