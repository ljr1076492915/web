import React from 'react';
import Head from './head'

export default class ChineseResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="c-bodys">
				<Head></Head>
				<div className="c-bodys-box">
					<div className="c-tips_title">
						<div className="c-tips_title_left">
							<img src={require("../static/img/fwdh.png")} alt="" className="c-img" />
							<span className="c-comSapn">服务导航：中文成绩单打印</span>
						</div>
						<div className="c-tips_title_right">
							<img src={require("../static/img/page.png")} alt="" className="c-img" />
							<span className="c-comSapn">剩余纸张</span>
							<span className="c-comSapn chinese-p-margin1">纸盒2:114</span>
							<span className="c-comSapn"> 纸盒3:330</span>
						</div>
					</div>
			
					<div className="c-bodysCont">
						<div className="c-bodysCont_left">
							<img src={require("../static/img/cjd.png")} alt="" />
						</div>
			
						<div className="c-bodysCont_right">
							<p className="c-titleP">成绩单预览</p>
							<p className="c-tipP">注意事项:</p>
							<p className="c-comP chinese-p-margin2">1.请确认成绩单或证明无误后，再进行打印</p>
							<p className="c-comP">2.如不显示预览效果，请重新登录。</p>
							<p className="c-comP">3.如免费打印次数为0后，请缴费后再进行打印</p>
							<p className="c-comP">4.如预览排版有误，请以打印为准。</p>
			
							<div className="c-print1">当前打印类型：中文成绩单</div>
							<div className="c-print1">当前收费标准：2元/份</div>
							<div className="c-print1">剩余免费打印次数：0次</div>
			
							<div className="c-comBtn chinese-p-margin3">
								<div className="c-btn btn_1">上移</div>
								<div className="c-btn btn_1">下移</div>
								<div className="c-btn btn_1">左移</div>
								<div className="c-btn btn_1">右移</div>
							</div>
			
							<div className="c-comBtn">
								<div className="c-btn btn_1">放大</div>
								<div className="c-btn btn_1">缩小</div>
								<div className="c-btn btn_1">上页</div>
								<div className="c-btn btn_1">下页</div>
							</div>
			
							<div className="c-comBtn">
								<div className="c-btn btn_2">退出系统</div>
								<div className="c-btn btn_2">打印</div>
								<div className="c-btn btn_2">返回首页</div>
							</div>
						</div>
			
					</div>
				</div>
			</div>
		)
	}
}