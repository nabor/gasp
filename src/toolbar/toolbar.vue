<style lang="stylus" src="./toolbar.styl"></style>

<template lang="jade">
#toolbar
	button.right {{msg}}
</template>

<script>
export default {
	data() {
		return {
			msg: 'Save'
		}
	}
}
</script>