import { setTimeout } from 'core-js';
import Vue from 'vue'

Vue.directive('preventReClick', {
    bind: function(el, binding) {
        var timeout = null;
        el.addEventListener('click', function() {
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(function() {
            binding.value && binding.value();
            el.removeAttribute('disabled');
          }, 3000); // 1秒后解除禁用状态
        });
      }
});

