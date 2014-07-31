define('gangnam-style/0.0.1/gangnam-psy/gangnam-psy.js', function(require, exports, module){var gangnamStyle = new Audio();

gangnamStyle.src = '/c/gangnam-style/0.0.1/gangnam-psy/gangnam-style.ogg';
gangnamStyle.autoplay = false;
gangnamStyle.loop = true;
gangnamStyle.volume = .2;
gangnamStyle.load();

module.exports = Vue.component('gangnam-psy', {
    data: {
        invert: 0,
        isHover: false
    },
    template: "<div class=\"gangnam-psy\">\r\n    <div class=\"psy\" style=\"-webkit-filter: invert({{invert}})\">\r\n        <img src=\"/c/gangnam-style/0.0.1/gangnam-psy/images/psy.png\" alt=\"\" v-class=\"dancing: isHover\">\r\n    </div>\r\n</div>",
    ready: function () {
        var props = this.$el.attributes;
        this.$data.invert = props.invert.value;

        this.$el.addEventListener('mouseover', function(e) {
            gangnamStyle.load();
            gangnamStyle.play();
            this.$data.isHover = true;
        }.bind(this));

        this.$el.addEventListener('mouseout', function(e) {
            gangnamStyle.pause();
            this.$data.isHover = false;
        }.bind(this));
    }
})

});