import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Grow } from "@material-ui/core";

class NoItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grow in={true} unmountOnExit>
        <p
          onClick={() => this.props.isClicked(this.props.word)}
          className={classes.noItem}
        >
          {this.props.word}
        </p>
      </Grow>
    );
  }
}

const style = {
  noItem: {
    fontSize: "0.5em",
    fontWeight: "bold",
    color: "white",
    height: "10px",
    width: "10px",
    borderRadius: "100%",
    backgroundColor: "#c62828",
    padding: "10px",
    alignItems: "center",
    marginLeft: "5px",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 2px 21px -5px rgba(0,0,0,0.75)"
  }
};

export default connect(
  state => ({}),
  {}
)(withStyles(style)(NoItem));
