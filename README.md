# vue3-clickout

A directive that allows you to call a function when you click outside the active area of an element.
The active area of an element is the element itself and any descendant nested within it.

## Requirements

- Vue 3.x

## Installation

```
npm i vue3-clickout
```

## Global registration

When registered globally, the directive will be available throughout the project. This means that you can use it in any component without the need for additional imports.

In main.js:
```js
import { createApp } from 'vue';
import App from './App.vue';

import vClickout from 'vue3-clickout';

createApp(App)
  .use(vClickout)
  .mount('#app');
```

## Local registration

When registering locally, the directive will be available for use only in the component where it was registered.

In any component:
```vue
<script>
import vClickout from "vue3-clickout";

export default {
  directives: {
    clickout: vClickout
  }
}
</script>
```

## Usage (examples for global registration)

When clicked in the active area, the class `v-clickout-active` is added to the element, otherwise it is removed.

The data that is passed to the callback function is an object with an element and an event: `{ el, event }`

```vue
<template>
  <div v-clickout="clickOutside">
    ...
  </div>
</template>

<script>
export default {
  methods: {
    clickOutside(event) {
      console.log(event); // event = { el, event }
    }
  }
}
</script>
```

`clickOutside` - callback function to execute after clicking outside the active area of the element.

#### Use with Composition API

```vue
<template>
  <div v-clickout="clickOutside">
    ...
  </div>
</template>

<script>
export default {
  setup() {
    const clickOutside = event => {
      console.log(event); // event = { el, event }
    }

    return { clickOutside }
  } 
}
</script>
```

## License

[MIT](https://github.com/alexshink/vue3-clickout/blob/main/LICENSE)
