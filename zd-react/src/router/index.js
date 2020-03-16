import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import App from '../components/App';

const BasrRoute = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/app" component={App}></Route>
		</Switch>
	</HashRouter>
)


export default BasrRoute;
