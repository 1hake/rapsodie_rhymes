import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "../panels/Panel";
import RhymeList from "./RhymeList";

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

class SentenceList extends Component {
  state = {
    open: false
  };

  wordIsClicked = word => {
    this.setState(() => ({
      open: true,
      value: word
    }));
  };

  setPanelClose() {
    this.setState(() => ({
      open: false
    }));
  }

  render() {
    const { classes } = this.props;
    const sortedRhymes = this.props.rhymeBlock.sort((a, b) => {
      return a.indexSentence - b.indexSentence;
    });
    let sentences = groupBy(sortedRhymes, "indexSentence");
    return sortedRhymes.length > 0 ? (
      <div className={classes.root}>
        {Object.keys(sentences).map(key => {
          return (
            <RhymeList
              content={sentences[key]}
              isClicked={this.wordIsClicked}
            />
          );
        })}
        <Panel
          value={this.state.value}
          close={() => this.setPanelClose()}
          open={this.state.open}
        />
      </div>
    ) : (
      <div className={classes.noSentence}>
        Type your text directly or paste lyrics with ctrl + v
        <Panel
          value={this.state.value}
          close={() => this.setPanelClose()}
          open={this.state.open}
        />
      </div>
    );
  }
}

const style = {
  noSentence: {
    display: "flex",
    color: "white",
    fontSize: "3em",
    fontFamily: "Barlow",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",
    boxShadow: "0px 2px 21px -17px rgba(0,0,0,0.75)",
    borderRadius: "25px",
    backgroundColor: "#303030",
    transition: "1s ease",
    minHeight: "90vh"
  },
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",

    boxShadow: "0px 2px 21px -17px rgba(0,0,0,0.75)",
    borderRadius: "25px",
    backgroundColor: "#303030",

    minHeight: "90vh"
  }
};

export default connect(
  state => ({
    rhymeBlock: state.rhymeBlock
  }),
  {}
)(withStyles(style)(SentenceList));
