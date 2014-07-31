define('gangnam-style/0.0.1/app/app.js', function(require, exports, module){
require('gangnam-style');
require('gangnam-psy');

module.exports = Vue.extend({
    template: "<div class=\"app\">\r\n    <div style=\"display:-webkit-box\">\r\n      <gangnam-psy invert=\".9\"></gangnam-psy>\r\n      <gangnam-psy invert=\".5\"></gangnam-psy>\r\n      <gangnam-psy invert=\".1\"></gangnam-psy>\r\n      <gangnam-style></gangnam-style>\r\n    </div>\r\n</div>"
})




});