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
