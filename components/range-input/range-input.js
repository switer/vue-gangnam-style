'use strict';

module.exports = Vue.component('range-input', {
    template: __inline('range-input.tpl'),
    data: {
        value: 1
    },
    methods: {
        onChange: function () {
            this.$dispatch('range-change', this.$data.value)
        }
    }
})