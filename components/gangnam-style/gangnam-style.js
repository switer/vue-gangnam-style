'use strict';

var music = new Audio();

music.src = __uri('gangnam-loop.ogg');
music.autoplay = false;
music.loop = true;
music.load();

Vue.component('gangnam-style', {
    template: __inline('gangnam-style.tpl'),
    ready: function () {

        this.$el.querySelector('.sig').addEventListener('mouseover', function(e) {
            music.play();
        });

        this.$el.querySelector('.sig').addEventListener('mouseout', function(e) {
            music.pause();
        });

        this.$el.addEventListener('webkitTransitionEnd', function(e) {
            if (e.propertyName == 'height' &&
                parseInt(window.getComputedStyle(e.target).height) < 10) {
                music.load();
            }
        });
    }
})