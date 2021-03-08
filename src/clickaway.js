module.exports = {
  beforeMount(el, binding) {
    const callback = binding.value;
    const directiveClass = 'v-clickout-active';

    el.clickEvent = function(event) {
      const elementIsActive = event.target === el || el.contains(event.target);

      if ( elementIsActive ) {
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
