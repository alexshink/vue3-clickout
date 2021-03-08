import vClickout from './clickout';

const install = function(Vue) {
  Vue.directive('clickout', vClickout);
};

if (window.Vue) {
  Vue.use(install);
}

vClickout.install = install;

export default vClickout;
