define("gangnam-style/0.0.1/gangnam-psy/gangnam-psy.js",function(a,n,e){var s=new Audio;s.src="/vue-gangnam-style/public/c/gangnam-style/0.0.1/gangnam-psy/gangnam-style.ogg",s.autoplay=!1,s.loop=!0,s.volume=.2,s.load(),e.exports=Vue.component("gangnam-psy",{data:{invert:0,isHover:!1},template:'<div class="gangnam-psy"\r\n    v-on="mouseover: onPlay, mouseout: onPause"\r\n>\r\n    <div class="psy" \r\n        style="-webkit-filter: invert({{invert}});-webkit-transform: scale({{scale}})"\r\n    >\r\n        <img src="/vue-gangnam-style/public/c/gangnam-style/0.0.1/gangnam-psy/images/psy_103a5fb.png" alt="" v-class="dancing: isHover">\r\n    </div>\r\n</div>',ready:function(){var a=this.$el.attributes;this.$data.invert=a.invert.value},methods:{onPlay:function(){s.load(),s.play(),this.$data.isHover=!0},onPause:function(){s.pause(),this.$data.isHover=!1}}})});