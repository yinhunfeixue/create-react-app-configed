import React, { Component } from 'react';
import { Button, Form, Input, message, Spin } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Axios from 'axios';

/**
 * 示例页面
 */
@Form.create()
class AntdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      loading: false,
    }
  }

  request() {
    if (this.state.key) {
      this.setState({ loading: true });
      Axios.get(`/baiduApi?wd=${this.state.key}`).then(
        (response) => {
          this.setState({ searchResult: response.data, loading: false });
        }
      );
    }
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <Spin spinning={this.state.loading}>
        <Form layout="inline">
          <FormItem>
            {
              getFieldDecorator('input')(<Input placeholder="请输入一个关键词" />)
            }
          </FormItem>
          <FormItem>
            <Button onClick={() => {
              let key = getFieldValue('input');
              message.success(key);
              this.setState({ key }, this.request);
            }}>百度搜索</Button>
          </FormItem>
        </Form>
        <div dangerouslySetInnerHTML={{ __html: this.state.searchResult }}></div>
      </Spin>
    );
  }
}

export default AntdPage;