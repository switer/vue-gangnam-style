define('gangnam-style/0.0.1/gangnam-style/gangnam-style.js', function(require, exports, module){'use strict';

var music = new Audio();

music.src = '/c/gangnam-style/0.0.1/gangnam-style/gangnam-loop.ogg';
music.autoplay = false;
music.loop = true;
music.load();

Vue.component('gangnam-style', {
    template: "<div class=\"gangnam-style\">\r\n    <div class=\"maia-signature\">\r\n      <div class=\"sig zg-sig\">\r\n        <div class=\"psydroid zg-psydroid\">\r\n          <img alt=\"\" class=\"zg-psydroid-head\" src=\"/c/gangnam-style/0.0.1/gangnam-style/images/psydroid-head.png\"> \r\n          <img alt=\"\" class=\"zg-psydroid-body\" src=\"/c/gangnam-style/0.0.1/gangnam-style/images/psydroid-body.png\"> \r\n          <img alt=\"\" class=\"zg-psydroid-arm-l\" src=\"/c/gangnam-style/0.0.1/gangnam-style/images/psydroid-arm-l.png\">\r\n          <img alt=\"\" class=\"zg-psydroid-arm-r\" src=\"/c/gangnam-style/0.0.1/gangnam-style/images/psydroid-arm-r.png\">\r\n          <img alt=\"\" class=\"zg-psydroid-leg-l\" src=\"/c/gangnam-style/0.0.1/gangnam-style/images/psydroid-leg-l.png\">\r\n          <img alt=\"\" class=\"zg-psydroid-leg-r\" src=\"/c/gangnam-style/0.0.1/gangnam-style/images/psydroid-leg-r.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>",
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

});