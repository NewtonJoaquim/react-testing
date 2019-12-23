import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent: any) => {
  class ComposedComponent extends Component<any, any> {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state: any) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps,null)(ComposedComponent);
};
