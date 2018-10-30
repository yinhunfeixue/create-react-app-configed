import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import async from '../components/Async';
import AntdPage from '../pages/AntdPage';

/**
 * 路由配置文件
 */
class RouterConfig extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact render={(props) => {
              return (
                <div>
                  我是首页
                </div>
              );
            }} />
            <Route path="/page1" exact component={async(() => import('../pages/Page1'))} />
            <Route path="/pageAntd" exact component={AntdPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default RouterConfig;