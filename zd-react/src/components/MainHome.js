import React from 'react';
import '../App.css';
import Head from './head'

export default class MainHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onclick = this.onclick.bind(this);
	}
	
	onclick(e) {
		if(e === 2){
			this.props.history.push('/ChineseResult');
		}
	}
	
	render() {
		return (
			<div className="bodys">
				<Head></Head>
			
				<div className="bodys-box">
					<div className="tips_title">
						<div className="tips_title_left">
							<img src={require("../static/img/xh.png")} alt="" className="img" />
							<span className="comSapn">学号：1328597894</span>
							<span className="comSapn span-margin"> 姓名：刘易阳</span>
							<span className="comSapn"> 类别：在校生</span>
						</div>
						<div className="tips_title_right">
							<img src={require("../static/img/page.png")} alt="" className="img" />
							<span className="comSapn">剩余纸张</span>
							<span className="comSapn span-margin">纸盒2:114</span>
							<span className="comSapn"> 纸盒3:330</span>
						</div>
					</div>
			
					<div className="bodysCont">
						<div className="bodysCont_tb">
							<div onClick={() => this.onclick(1)}><img src={require("../static/img/个人信息.png")} alt="" /></div>
							<div onClick={() => this.onclick(2)}><img src={require("../static/img/中文成绩单.png")} alt="" /></div>
							<div onClick={() => this.onclick(3)}><img src={require("../static/img/英文成绩单.png")} alt="" /></div>
							<div onClick={() => this.onclick(4)}><img src={require("../static/img/可表打印.png")} alt="" /></div>
						</div>
						<div className="bodysCont_tb">
							<div onClick={() => this.onclick(5)}><img src={require("../static/img/学籍证明.png")} alt="" /></div>
							<div onClick={() => this.onclick(6)}><img src={require("../static/img/四六级成绩查询.png")} alt="" /></div>
							<div onClick={() => this.onclick(7)}><img src={require("../static/img/缴费标准.png")} alt="" /></div>
							<div onClick={() => this.onclick(8)}><img src={require("../static/img/委托打印.png")} alt="" /></div>
						</div>
						<div className="bodysCont_tb">
							<div onClick={() => this.onclick(9)}><img src={require("../static/img/满意度调查.png")} alt="" /></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
			
						<div className="bodysCont_tip">
							<div className="tipTitle"><span>温馨提示：请及时拿走您的证件和材料，以免落下。</span></div>
							<div> <img src={require("../static/img/故障报修.png")} alt="" /></div>
							<div> <img src={require("../static/img/退出系统.png")} alt="" /></div>
						</div>
					</div>
				</div>
			
			
			</div>
			
		)
	}
}