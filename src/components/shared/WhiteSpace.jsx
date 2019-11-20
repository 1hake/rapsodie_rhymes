import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

class WhiteSpace extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        className={this.props.vertical ? classes.vertical : classes.horizontal}
      />
    );
  }
}

const style = {
  vertical: {
    width: "15px"
  },
  horizontal: {
    height: "5px"
  }
};

export default withStyles(style)(WhiteSpace);
