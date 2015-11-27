import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

export class Editor extends React.Component {
	render() {
		return (
			<div>
				<AppBar
					title="Gasp!"
					iconClassNameRight="muidocs-icon-navigation-expand-more" />
				<RaisedButton label='Save'></RaisedButton>
				<title>
					Title ...
				</title>
				<article id='gasp-editor' contentEditable='true'>
					Type in here...
				</article>
			</div>
		);
	}
}