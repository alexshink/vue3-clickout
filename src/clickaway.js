module.exports = {
  beforeMount(el, binding) {
    const directiveData = binding.value;
    const directiveClass = 'v-clickaway-active';

    let callback = directiveData;
    let debug = false;

    if ( directiveData.debug ) {
      callback = directiveData.callback;
      debug = true;
    }

    el.clickEvent = function(event) {
      const elementIsActive = event.target === el || el.contains(event.target);

      if ( elementIsActive ) {
        el.classList.add(directiveClass);

        if ( debug ) {
          el.style.outline = '2px solid red';
        }
      } else if ( el.classList.contains(directiveClass) ) {
        el.classList.remove(directiveClass);
        callback();

        if ( debug ) {
          el.style.outline = 'none';
        }
      }
    }

    document.body.addEventListener('click', el.clickEvent);
  },

  unmounted(el) {
    document.body.removeEventListener('click', el.clickEvent);
  }
}
