<div class="gangnam-psy"
    v-on="mouseover: onPlay, mouseout: onPause"
>
    <div class="psy" 
        style="-webkit-filter: invert({{invert}});-webkit-transform: scale({{scale}})"
    >
        <img src="/vue-gangnam-style/public/c/gangnam-style/0.0.1/gangnam-psy/images/psy_103a5fb.png" alt="" v-class="dancing: isHover">
    </div>
</div>