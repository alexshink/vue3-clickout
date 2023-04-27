const directiveClass = 'v-clickout-active';
const params = {
  event: {
    type: 'function',
    required: true
  },
  active: {
    type: 'boolean'
  },
  always: {
    type: 'boolean'
  }
}

module.exports = {
  beforeMount(el, binding) {
    const args = binding.value
    if ( !args ) {
      console.error('[v-clickout]: Arguments not found. Expected Function or Object.', el);
      return
    }

    if ( typeof args === 'object' ) {
      for (let key in params) {
        // Arguments 'require' checking
        const requiredArgNotExist = params[key].required && !(key in args);
        if ( requiredArgNotExist ) {
          console.error(`[v-clickout]: "${key}" argument is required.`, el);
          return
        }

        // Arguments 'type' checking
        const argTypeInvalid = args[key] && typeof args[key] !== params[key].type;
        if ( argTypeInvalid ) {
          console.error(`[v-clickout]: Invalid type for argument "${key}". Expected ${params[key].type}.`, el);
          return
        }
      }
    }

    const callback = args.event || args;
    const elementAlreadyActive = args.active;
    const alwaysRunCallback = args.always;

    const callbackTypeInvalid = typeof callback !== params.event.type;
    if ( callbackTypeInvalid ) {
      console.error('[v-clickout]: Invalid callback. Expected Function.', el);
      return
    }

    if ( elementAlreadyActive || alwaysRunCallback ) {
      el.classList.add(directiveClass);
    }

    el.clickEvent = function(event) {
      const elementInClickArea = event.target === el || el.contains(event.target);

      if ( !elementInClickArea && alwaysRunCallback ) {
        callback({ el, event });
        return
      }

      if ( elementInClickArea ) {
        el.classList.add(directiveClass);
      } else if ( el.classList.contains(directiveClass) ) {
        el.classList.remove(directiveClass);
        callback({ el, event });
      }
    }

    document.body.addEventListener('click', el.clickEvent);
  },

  unmounted(el) {
    document.body.removeEventListener('click', el.clickEvent);
  }
}
