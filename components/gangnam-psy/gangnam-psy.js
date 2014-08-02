var gangnamStyle = new Audio();

gangnamStyle.src = __uri('gangnam-style.ogg');
gangnamStyle.autoplay = false;
gangnamStyle.loop = true;
gangnamStyle.volume = .2;
gangnamStyle.load();

module.exports = Vue.component('gangnam-psy', {
    data: {
        invert: 0,
        isHover: false
    },
    template: __inline('gangnam-psy.tpl'),
    ready: function () {
        var props = this.$el.attributes;
        this.$data.invert = props.invert.value;

    },
    methods: {
        onPlay: function () {
            // gangnamStyle.load();
            gangnamStyle.play();
            this.$data.isHover = true;
        },
        onPause: function () {
            gangnamStyle.pause();
            this.$data.isHover = false;
        }
    }
})