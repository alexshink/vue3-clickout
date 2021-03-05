import vClickaway from './clickaway';

const install = function(Vue) {
  Vue.directive('clickaway', vClickaway);
};

if (window.Vue) {
  Vue.use(install);
}

vClickaway.install = install;

export default vClickaway;
