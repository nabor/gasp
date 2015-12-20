<style lang="stylus" src="./toolbar.styl"></style>

<template lang="jade">
#toolbar
	button#publish.green.right {{publish}}
	button#save.right {{save}}
</template>

<script>
export default {
	data() {
		return {
			save: 'Save',
			publish: 'Publish'
		}
	}
}
</script>