import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import VowContainer from "./VowContainer";
import { rhymeColorMatch } from "../../constants/rhymeColorMatch";
import { vowVerbos } from "../../constants/pattern";
import { Grow } from "@material-ui/core";

const style = {
  item: {
    fontSize: "0.6em",

    fontWeight: "bold",
    color: "black",
    borderRadius: "25px",
    padding: "4px",
    alignItems: "center",
    margin: "2px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
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
    boxShadow: "0px 2px 21px -5px rgba(0,0,0,0.75)",
  },
  originalVow: {
    fontSize: "1.6em",
    color: "black",

    fontFamily: "Barlow",
  },
  convertVow: {
    fontSize: "1.2em",
    color: "white",
    fontFamily: "NotoSans",
  },
};

class MatchesContainer extends Component {
  render() {
    const { matches, classes } = this.props;
    console.log(matches);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {matches &&
          matches.matchedPunch &&
          matches.matchedPunch.map((match) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
              }}
            >
              {match.map((vow, index) => (
                <Grow key={vow + index} in={true} unmountOnExit>
                  <div
                    style={{
                      backgroundColor: rhymeColorMatch[vowVerbos[vow]],
                      width: 100 / match.length + "%",
                      display: "flex",
                      height: "50px",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div className={classes.originalVow}>{vowVerbos[vow]}</div>

                    <div className={classes.convertVow}>{vow}</div>
                  </div>
                </Grow>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({ matches: state.matches }),
  {}
)(withStyles(style)(MatchesContainer));
