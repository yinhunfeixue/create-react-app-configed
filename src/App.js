import React, { Component } from 'react';
import styles from './App.less';
import RouterConfig from './config/RouterConfig';
import UrlUtil from './utils/UrlUtil';
import { Menu, Icon, LocaleProvider } from 'antd';
import ProxySetting from './proxy/ProxySetting';
import zhCN from 'antd/lib/locale-provider/zh_CN';
/**
 * 主程序
 */
class App extends Component {
  constructor(props) {
    super(props);
    ProxySetting.init();
    this.state = {
      selectedMenu: window.location.hash ? window.location.hash : '#/',
    };
  }

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div>
          <div className={styles.Header}>
            <h1>create-react-app</h1>
            <Menu
              mode="horizontal"
              selectedKeys={[this.state.selectedMenu]}
              onSelect={(item) => {
                this.setState({ selectedMenu: item.key });
              }}
            >
              <Menu.Item key="#/">
                <a href="#/"> <Icon type="mail" />首页</a>
              </Menu.Item>
              <Menu.Item key={UrlUtil.getUrl('page1')}>
                <a href={UrlUtil.getUrl('page1')}> <Icon type="appstore" />简单页面,无参数</a>
              </Menu.Item>
              <Menu.Item key={UrlUtil.getUrl('page1', { id: 2 })}>
                <a href={UrlUtil.getUrl('page1', { id: 2 })}> <Icon type="appstore" />简单页面,参数：id=2</a>
              </Menu.Item>
              <Menu.Item key={UrlUtil.getUrl('pageAntd')}>
                <a href={UrlUtil.getUrl('pageAntd')}>有antd组件的页面</a>
              </Menu.Item>
              <Menu.Item key={UrlUtil.getUrl('searchTableDemo')}>
                <a href={UrlUtil.getUrl('searchTableDemo')}>SearchTable示例</a>
              </Menu.Item>
              <Menu.Item key={UrlUtil.getUrl('antdMobile')}>
                <a href={UrlUtil.getUrl('antdMobile')}>antd mobile</a>
              </Menu.Item>
            </Menu>
          </div>
          <div className={styles.body}>
            <RouterConfig />
          </div>

        </div>
      </LocaleProvider >
    );
  }
}

export default App;
