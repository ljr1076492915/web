import React from 'react';
import Head from './head'
import Foot from './foot'
import KeyBoard from './KeyBoard'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.getTime = this.getTime.bind(this);
		this.loadTime = this.loadTime.bind(this);
		this.gouOut = this.gouOut.bind(this);
		this.showKeys = this.showKeys.bind(this);
		this.thatDate = this.thatDate.bind(this);
		this.state = {
			time: '',
			text: '',
			show: false,
			timerID: ''
		}
	}
	
	componentDidMount() {
		this.getTime();
		this.loadTime();
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	gouOut(e) {
		this.setState({show: e});
	}
	
	showKeys(text) {
		this.setState({
			text: text,
			show: true
		});
	}
	
	getTime() {
		var time = new Date();
		var hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
		var minite = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
		var second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
		this.setState({time: `${hour}:${minite}:${second}`});
	}
	
	loadTime() {
		this.timerID = setInterval(() => {
			this.getTime();
		}, 1000);
	}
	
	thatDate() {
		let date = new Date();
		date.setDate(date.getDate());
		let year = date.getFullYear();
		let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
		let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		return year + '年 ' + month + '月 ' + day + '日';
	}
	
	render() {
		const show = this.state.show;
		
		return (
			<div className="log-bg">
				<Head></Head>
				<div className="log-box">
					<div className="log-title">
						<div className="flex">
							<img src={require("../static/img/time.png")} alt="时间"/>
							<span className="left1">当前时间：</span>
							<span>{this.thatDate()}</span>
							<span className="left1">{this.state.time}</span>
						</div>
						<div className="flex">
							<img src={require("../static/img/paper.png")} alt="icon"/>
							<span className="left1">剩余纸张:</span>
							<span className="left2">纸盒2:114</span>
							<span className="left2">纸盒3:330</span>
						</div>
					</div>
					
					<div className="log-content">
						<div className="top">
							<img src={require("../static/img/idcard.png")} onClick={() => this.showKeys('身份证')} alt="icon" />
							<img src={require("../static/img/code.png")} onClick={() => this.showKeys('学号')} alt="icon" />
							<img src={require("../static/img/schoolcard.png")} onClick={() => this.showKeys('校园卡')} alt="icon" />
						</div>
						
						<div className="notice">通知公告</div>
						
						<div className="bottom">
							<p className="text">欢迎使用学生自助服务系统 【2019-08-12】</p>
							<p className="text2 text">学生自助服务系统管理条例 【2019-08-12】</p>
						</div>
						<Foot></Foot>
					</div>
				</div>
				{show &&
					<KeyBoard text={this.state.text} data={this.gouOut} history ={this.props.history}></KeyBoard>
				}
			</div>
		)
	}
}