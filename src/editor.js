import React from 'react';

export class Editor extends React.Component {
	render() { return (
		<div id='editor'>
			<div className='container'>
				<h1 id='gasp-title' contentEditable={true}>Lorem Ipsum</h1>
				<article id='gasp-editor' contentEditable={true}>
					<p>Lorem ipsum dolor sit amet, tritani ornatus mei ne, an eum causae fabellas phaedrum, mei ex saepe latine. Natum possim cu qui, ut ius fugit senserit electram. Dicant deserunt vim ut, diam dolorem indoctum quo ut, eam aeterno fierent deseruisse ex. Quo exerci alterum definitiones cu, ad causae volutpat vim. Ignota diceret ex cum. Eam doctus numquam ne, at sed diam explicari.</p>
					<p>An noluisse delicata sadipscing usu. Graecis ceteros concludaturque ei pro, ad novum sanctus eam, ad reprimique referrentur vix. Ad petentium pertinacia nec. Nam aliquid maiestatis dissentias cu, perpetua scribentur ne sed, qui reque constituto at. Wisi consequuntur ex cum. Ut his erat integre, errem nominati inciderint ex mel, sit id illud scripta iudicabit.</p>
					<p>Has no elitr scripserit, quem iriure interesset nam an, quo deserunt scribentur et. Per dicat animal suscipiantur id. Mel aliquid adolescens dissentiet no, propriae vituperata percipitur mel ad. Exerci eligendi ad eum. Urbanitas vulputate reprimique sed et, rebum menandri quaerendum sea ut.</p>
					<p>Pri oblique prodesset assueverit at, sed ut diam labitur equidem. Quodsi tacimates expetenda duo ne, ei iusto euripidis scribentur nam, an vocibus maiorum temporibus ius. Sed postea tritani at, eos partem tacimates ea. Mutat quidam dolores an est, his aeterno sapientem eu. Exerci consul reprehendunt eu eam.</p>
					<p>At sint omittam pertinacia his, no graeci facete pro. Id qui erat ubique antiopam, duo ea omnes aliquando deseruisse. Vide consul concludaturque ei vix. Ea salutandi urbanitas his, id case adolescens eos.</p>
				</article>
			</div>
		</div>
	);}
}