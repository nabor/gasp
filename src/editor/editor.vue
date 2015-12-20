<style lang="stylus" src="./editor.styl"></style>

<template lang="jade">
#editor
	.container
		h1#gasp-title(contenteditable='true') {{title}}
		article#gasp-editor(contenteditable='true') {{{content}}}
</template>

<script>
export default {
	data() {
		return {
			title: 'Lorem Ipsum',
			content: '<p>Lorem ipsum dolor sit amet, tritani ornatus mei ne, an eum causae fabellas phaedrum, mei ex saepe latine. Natum possim cu qui, ut ius fugit senserit electram. Dicant deserunt vim ut, diam dolorem indoctum quo ut, eam aeterno fierent deseruisse ex. Quo exerci alterum definitiones cu, ad causae volutpat vim. Ignota diceret ex cum. Eam doctus numquam ne, at sed diam explicari.</p><p>An noluisse delicata sadipscing usu. Graecis ceteros concludaturque ei pro, ad novum sanctus eam, ad reprimique referrentur vix. Ad petentium pertinacia nec. Nam aliquid maiestatis dissentias cu, perpetua scribentur ne sed, qui reque constituto at. Wisi consequuntur ex cum. Ut his erat integre, errem nominati inciderint ex mel, sit id illud scripta iudicabit.</p>'
		}
	}
}
</script>