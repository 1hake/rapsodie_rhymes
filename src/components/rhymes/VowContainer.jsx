import React, { useState } from "react";
import { CircularProgress, Grow, Typography } from "@material-ui/core";
import { consPattern, vowVerbos, vowPattern } from "../../constants/pattern";
import { rhymeColorMatch } from "../../constants/rhymeColorMatch";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import NoItem from "./NoItem";
import { removeDiacritics } from "../../shared/Tools";

const useStyles = makeStyles({
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
    flexDirection: "column"
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
    boxShadow: "0px 2px 21px -5px rgba(0,0,0,0.75)"
  },
  originalVow: {
    fontSize: "1.6em",
    color: "black",

    fontFamily: "Barlow"
  },
  convertVow: {
    fontSize: "1.2em",
    color: "white",
    fontFamily: "NotoSans"
  }
});

function VowContainer(props) {
  const classes = useStyles();
  return props.elem && props.elem.rhymes ? (
    props.elem.rhymes.map((text, index) => {
      // HERE CHANGE
      let hello = [...text];
      hello.map(item => {});
      const vow = text.replace(consPattern, "");

      // const vow = text;
      return (
        props.elem.word.length > 1 && (
          <Grow in={true} unmountOnExit timeout={index + 500}>
            <div
              style={{
                backgroundColor: rhymeColorMatch[vowVerbos[vow]]
              }}
              className={classes.item}
              // onClick={() =>
              // 	this.props.isClicked(props.elem.word.toLowerCase())}
            >
              <div className={classes.originalVow}>{vowVerbos[vow]}</div>

              <div className={classes.convertVow}>{vow}</div>
            </div>
          </Grow>
        )
      );
    })
  ) : (
    <NoItem word={props.elem.word} />
  );
}

export default VowContainer;
