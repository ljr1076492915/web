import React from 'react';

export default class Head extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="contentsBody">
				<div className="head">
					<div className="head_cont">
						<div className="head_cont1">
							<img src={require("../static/img/logo.png")} alt="吉林师范大学"/>
						</div>
						<div className="head_cont2">
							<span>自助服务终端</span>
						</div>
						<div className="head_cont3">
							<div className="divP">
								<p>学生自助服务系统</p>
								<p>服务热线：0535-8206275</p>
								<p>技术支持：山东正元数字城市建设有限公司</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}