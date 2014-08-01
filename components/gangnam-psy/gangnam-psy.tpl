<div class="gangnam-psy"
    v-on="mouseover: onPlay, mouseout: onPause"
>
    <div class="psy" 
        style="-webkit-filter: invert({{invert}});-webkit-transform: scale({{scale}})"
    >
        <img src="images/psy.png" alt="" v-class="dancing: isHover">
    </div>
</div>