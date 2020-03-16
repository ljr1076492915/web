import React from 'react';

export default class Foot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="zd-foot">
					<div className="foot-el">温馨提示：请及时拿走您的证件和餐料，以免落下。</div>
					<img src={require("../static/img/callme.png")} alt="联系我们" />
			</div>
		)
	}
}