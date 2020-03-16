import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import MainHome from '../components/MainHome';
import ChineseResult from '../components/ChineseResult';

const BasrRoute = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/main" component={MainHome}></Route>
			<Route exact path="/ChineseResult" component={ChineseResult}></Route>
		</Switch>
	</HashRouter>
)


export default BasrRoute;
