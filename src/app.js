var Vue = require('vue')
var Toolbar = require('./toolbar/toolbar.vue')
var Editor = require('./editor/editor.vue')

new Vue({
	el: 'body',
	components: {
		toolbar: Toolbar,
		editor: Editor
	}
})

document.addEventListener('keypress', function(e) {
	if (e.keyCode == 13) {
		document.execCommand('formatBlock',false, 'p');
	}
});
