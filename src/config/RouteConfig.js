import { HashRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import SubPage from '../views/SubPage';

/**
 * 页面路由配置，在此页面中配置子页面中路由
 * @author : xujunjie (yinhunfeixue@163.com)
 * @date   : 2018-2-8 14:23:36
 */
class Router extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path='/' component={SubPage} exact />
				</Switch>
			</HashRouter>
		);
	}
}
export default Router;