var music = new Audio();
    music.src = '../components/gangnam-style/gangnam-loop2.ogg';
    music.autoplay = false;
    music.loop = true;
    music.load();

Vue.component('gangnam-style', {
    template: '#tpl-gangnam-style',
    ready: function () {
        this.$el.querySelector('#sig').addEventListener('mouseover', function(e) {
            music.play();
        });

        this.$el.querySelector('#sig').addEventListener('mouseout', function(e) {
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