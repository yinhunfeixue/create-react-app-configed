import React, { Component } from 'react';
import { Form, Table, message, Spin } from 'antd';
import Axios from 'axios';

let formChanged = false;

/**
 * 用于搜索的表格
 * + 初始化时，会自动获取一次数据
 * + 切换页码时自动获取数据
 * + 网络请求过程中，显示加载动画
 * + 手动刷新时：外部刷新数据时（例如新增或删除数据后），页码不会被重置
 * + 搜索条件变化后，会自动把页码重置为1
 * 
 * ### 必传属性
 * + formItems--用于搜索的form表单项组件类型（是类型，不是实例）,  formItems中的组件需要用getFieldDecorator包裹
 * + columns--表格的列数据
 * + searchCreater(formValues, pageSize, current)，返回值为网络请求的参数，和axios.quest()的参数相同，通常包含{url, body, method}，可参考axios官网
 * + transData--一个函数，格式为fun(response), 返回值为{dataSource, total}, data：表格数据源， total:总数据条数；返回null，表示不刷新表格数据（如果请求结果出错，可返回null)。
 * 
 * ### 可选属性
 * + rowKey--table的rowKey属性，如果不传，默认为"id"
 * + pageSize--每页显示的条数，默认为10
 * + tableProps--要单独给table设置的props属性，默认为null
 * + formProps--要给表单传入的props，默认为null
 * 
 * ### formItems组件内部
 * + 可通过执行this.props.refresh()方法，主动刷新表格，例如在表单中有搜索按钮，当点击搜索按钮时，可刷新数据
 * + 可通过this.props.reset()重置表单
 * + 可通过this.props.form获取表单的引用
 * + 可通过this.props.table获取Table组件的引用
 */
@Form.create({
  onValuesChange: (a, b, c) => {
    formChanged = true;
  }
})
class SearchTable extends Component {
  static defaultProps = {
    pageSize: 10,
  }

  constructor(props) {
    super(props);
    //表单中的数据
    this.formValues = {};

    this.state = {
      //当前页码，从1开始
      current: 1,
      //是否网络请求中
      loading: false,
      //表格数据源
      dataSource: [],
      //数据总条数
      total: 0,
    };
  }

  componentDidMount() {
    this.searchQuest();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pageSize !== this.props.pageSize) {
      this.searchQuest();
    }
  }

  searchQuest = () => {
    this.props.form.validateFields((error, values) => {
      if (!error) {
        this.setState({ loading: true, current: formChanged ? 1 : this.state.current }, () => {
          formChanged = false;
          const requestData = this.props.searchCreater(values, this.props.pageSize, this.state.current);
          Axios.request(requestData)
            .then(
              (response) => {
                let data = this.props.transData(response.data);
                this.setState({
                  loading: false,
                });
                if (data) {
                  this.setState({
                    dataSource: data.data,
                    total: data.total,
                  });
                }
              }
            )
            .catch(
              (error) => {
                if (this.props.errorHandler) {
                  this.props.errorHandler(error);
                }
                else {
                  message.error(error);
                }
                this.setState({ loading: false });
              }
            );
        });
      }
    });
  }

  resetForm = () => {
    this.props.form.resetFields();
  }

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <Form layout="inline">
          <this.props.formItems
            refresh={this.searchQuest}
            reset={this.resetForm}
            table={this.refs.table}
            form={this.props.form}
            {...this.props.formProps} />
        </Form>
        <Table
          ref="table"
          rowKey={this.props.rowKey || "id"}
          columns={this.props.columns}
          dataSource={this.state.dataSource}
          pagination={
            Object.assign(
              {
                pageSize: this.props.pageSize,
                current: this.state.current,
                total: this.state.total,
                showQuickJumper: true,
                onChange: (page) => {
                  this.setState({ current: page }, this.searchQuest);
                },
              },
              this.props.tableProps ? this.props.tableProps.pagination : null
            )
          }
          {...this.props.tableProps}
        />
      </Spin>
    );
  }
}

export default SearchTable;