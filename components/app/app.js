
require('gangnam-style');
require('gangnam-psy');
require('range-input');

module.exports = Vue.extend({
    data: {
        scale: 1
    },
    template: __inline('app.tpl'),
    ready: function () {
        
        this.onRangeChange = function (value) {
            this.$data.scale = value
        }.bind(this)

        this.$on('range-change', this.onRangeChange);
    },
    beforeDestroy: function () {
        this.$off('range-change', this.onRangeChange);
    }
})


