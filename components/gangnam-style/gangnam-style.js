'use strict';

var music = new Audio();

music.src = __uri('gangnam-loop.ogg');
music.autoplay = false;
music.loop = true;
music.load();

Vue.component('gangnam-style', {
    template: __inline('gangnam-style.tpl'),
    ready: function () {
        // TODO
    },
    methods: {
        onPlay: function () {
            music.play();
        },
        onPause: function () {
            music.pause();
        },
        onEnd: function (e) {
            if (e.propertyName == 'height' &&
                parseInt(window.getComputedStyle(e.target).height) < 10) {
                music.load();
            }
        }
    }
})