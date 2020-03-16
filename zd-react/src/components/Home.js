import React from 'react';
import Head from './head'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.openApp = this.openApp.bind(this);
	}
	openApp() {
		this.props.history.push('/app')
	}
	
	render() {
		return (
			<div>
				<Head />
				<div onClick={this.openApp}>首页</div>
			</div>		
		)
	}
}