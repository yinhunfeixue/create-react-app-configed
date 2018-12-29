import React, { Component } from 'react';

/**
 * 示例页面
 */
class Page1 extends Component {
  render() {
    const queryStr = JSON.stringify(this.props.query);
    return (
      <div>
        <h3>我只一个简单的页面，参数为: {queryStr ? queryStr : '无'}</h3>
      </div>
    );
  }
}

export default Page1;