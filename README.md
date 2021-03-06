# vue3-clickaway

A directive that allows you to call a function when you click outside the active area of an element.
The active area of an element is the element itself and any descendant nested within it.

When clicked in the active area, the class `v-clickaway-active` is added to the element, otherwise it is removed.

## Requirements

- Vue 3.x

## Installation

```
npm i vue3-clickaway
```

## Global registration

When registered globally, the directive will be available throughout the project. This means that you can use it in any component without the need for additional imports.

In main.js:
```js
import { createApp } from 'vue';
import App from './App.vue';

import vClickaway from 'vue3-clickaway';

createApp(App)
  .use(vClickaway)
  .mount('#app');
```

## Local registration

When registering locally, the directive will be available for use only in the component where it was registered.

In any component:
```vue
<script>
import vClickaway from "vue3-clickaway";

export default {
  directives: {
    clickaway: vClickaway
  }
}
</script>
```

## Usage (examples for global registration)

```vue
<template>
  <div v-clickaway="clickOutside">
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
  <div v-clickaway="clickOutside">
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

[MIT](https://github.com/alexshink/vue3-clickaway/blob/main/LICENSE)
