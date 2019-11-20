import { CircularProgress, Grow, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { consPattern, vowVerbos, vowPattern } from "../../constants/pattern";
import { rhymeColorMatch } from "../../constants/rhymeColorMatch";
import WhiteSpace from "../shared/WhiteSpace";
import NoItem from "./NoItem";
import VowContainer from "./VowContainer";
import "../../App.css";

class RhymeList extends Component {
  render() {
    const { classes } = this.props;
    const sortedRhymes = this.props.content.sort((a, b) => {
      return a.index - b.index;
    });
    console.log(sortedRhymes);
    return (
      <div
        className={classes.root}
        style={{
          backgroundColor:
            (sortedRhymes[0].indexSentence + 1) % 2 == 1 ? "#212121" : "#303030"
        }}
      >
        <div className={classes.index}>
          <div>{sortedRhymes[0].indexSentence + 1}.</div>
        </div>
        <div className={classes.rhymeContainer}>
          {sortedRhymes ? (
            sortedRhymes.map((elem, index) => {
              return (
                elem && (
                  <Grow in={true} direction="up">
                    <div className={classes.word}>
                      <div className={classes.orignalContainer}>
                        {elem.rhymes &&
                          elem.rhymes.map((item, index) => {
                            return (
                              <>
                                <div>{item}</div>
                                <div>
                                  {index !== elem.rhymes.length - 1 ? "." : ""}
                                </div>
                              </>
                            );
                          })}
                      </div>
                      <div className={classes.wordText}>{elem.word}</div>
                      <WhiteSpace />
                      <div className={classes.wordContainer}>
                        <VowContainer
                          isClicked={this.props.isClicked}
                          elem={elem}
                        />
                      </div>
                    </div>
                  </Grow>
                )
              );
            })
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    );
  }
}

const style = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "no-wrap",
    width: "100%",
    maxHeight: "150px",
    overflow: "hidden"
  },
  wordContainer: {
    display: "flex"
  },
  orignalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2em",
    fontFamily: "NotoSans"
  },
  wordText: {
    fontSize: "1.5em",
    fontFamily: "Barlow",
    fontWeight: "bold",
    color: "black",
    marginTop: "-5px"
  },
  rhymeContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  word: {
    fontSize: "1em",
    color: "black",
    fontFamily: "Montserrat",
    padding: "7px",
    display: "flex",
    flexDirection: "column ",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    backgroundColor: "#eeeeee",
    borderRadius: "25px",
    height: "100px"
  },
  item: {
    fontSize: "0.7em",
    minWidth: "15px",
    fontWeight: "bold",
    color: "black",
    borderRadius: "25px",
    backgroundColor: "white",
    padding: "10px",
    alignItems: "center",
    margin: "2px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  index: {
    height: "120px",
    color: "white",
    fontSize: "1.2em",
    fontWeight: "bold",

    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20px"
  },
  originalVow: {
    fontSize: "1.6em",
    color: "black",
    fontWeight: "bold",
    fontFamily: "Barlow"
  },
  convertVow: {
    fontSize: "1.2em",
    color: "white",
    fontFamily: "Barlow"
  }
};

export default connect(
  state => ({
    rhymeBlock: state.rhymeBlock
  }),
  {}
)(withStyles(style)(RhymeList));
