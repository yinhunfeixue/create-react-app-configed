import React, { Component } from 'react';
import SearchTable from '../components/SearchTable';
import FormItem from 'antd/lib/form/FormItem';
import { Input, Button } from 'antd';

/**
 * DEMO
 */
class SearchTableDemo extends Component {
  render() {
    return (
      <div>
        <SearchTable
          searchCreater={(values, pageSize, current) => {
            return {
              url: `/services/article/article/listPage/${current}/${pageSize}?Q=parentId_EQ=1f6a15009ce842bcad1acaa338387c1a` + (values.key ? `&Q=title_LK=${values.key}` : ''),
              method: 'GET',
            };
          }}
          transData={(response) => {
            return {
              data: response.data,
              total: response.length,
            }
          }}
          columns={[
            {
              title: '类别',
              dataIndex: 'category'
            },
            {
              title: '标题',
              dataIndex: 'title',
            }
          ]}
          formItems={SearchFrom}
          pageSize={2}
        />
      </div>
    );
  }
}


/**
 * 搜索表单
 */
class SearchFrom extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem label="key">
          {
            getFieldDecorator('key', { initialValue: '' })(<Input />)
          }
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={() => {
            this.props.refresh();
          }}>查询</Button>
          <Button onClick={() => {
            this.props.reset();
          }}>重置</Button>
        </FormItem>
      </div>
    );
  }
}

export default SearchTableDemo;