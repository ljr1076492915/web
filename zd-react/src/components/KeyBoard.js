import React from 'react';


export default class KeyBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			keys: [
				{
					code: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '删除']
				},
				{
					code: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
				},
				{
					code: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
				},
				{
					code: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '退出']
				}
			]
		}
		this.login = this.login.bind(this);
	}
	
	login() {
		this.props.history.push('main')
	}
	
	keUp(e) {
		if (e === '删除') {
			if (!this.state.input) return;
			let length = this.state.input.length;
			this.setState({input: this.state.input.substr(0, length - 1)});
		} else if (e === '退出') {
			this.props.data(false);
		} else {
			if (this.state.input.length > 18) return;
			this.setState({input: this.state.input + e});
		}
	}
	
	render() {
		return (
			<div className="key-board">
				<div className="zhe-zhao"></div>
				<div className="key-box">
					<div className="top">
						<div className="flex">
							<input type="text" readOnly value={this.state.input} placeholder={`请输入${this.props.text}信息`} />
							<div onClick={this.login}>登录</div>
						</div>
					</div>
					
					<div className="bottom">
						{this.state.keys.map((item, index) => {
							return (<div className={`line line${index}`} key={index}>
								{item.code.map((el, y) => {
									return <div className={el === '删除' || el === '退出' ? 'btn' : 'el'}  key={el} onClick={() => this.keUp(el)}>{ el }</div>
								})}
							</div>)
						})
						}
					</div> 
				</div>
			</div>
		)
	}
}