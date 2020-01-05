import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "../panels/Panel";
import RhymeList from "./RhymeList";
import { groupBy } from "../../shared/Tools";
import { closePanel } from "../actions";

class SentenceList extends Component {
  render() {
    const { classes } = this.props;
    const sortedRhymes = this.props.rhymeBlock.sort((a, b) => {
      return a.indexSentence - b.indexSentence;
    });
    let sentences = groupBy(sortedRhymes, "indexSentence");
    return sortedRhymes.length > 0 ? (
      <div className={classes.root}>
        {Object.keys(sentences).map(key => {
          return <RhymeList content={sentences[key]} />;
        })}
        <Panel />
      </div>
    ) : (
      <div className={classes.noSentence}>
        Type your text directly or paste lyrics with ctrl + v
        <Panel />
      </div>
    );
  }
}

const style = {
  noSentence: {
    display: "flex",
    color: "white",
    fontSize: "2em",
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
    rhymeBlock: state.rhymeBlock,
    open: state.panelOpen
  }),
  { closePanel }
)(withStyles(style)(SentenceList));
