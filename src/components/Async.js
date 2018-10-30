import React, { Component } from "react";
const URL = require('url');


export default function async(importComponent) {
  /**
   * 类方法
   */
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} query={URL.parse(this.props.location.search, true).query} /> : null;
    }
  }
  return AsyncComponent;
}