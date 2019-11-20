import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import MyInput from "../inputs/MyInput";
import SentenceList from "../rhymes/SentenceList";
import KeyboardEventHandler from "react-keyboard-event-handler";
import MainInput from "../inputs/MainInput";
import { splitLines } from "../actions";
import { example } from "../../constants/constants";

class Main extends Component {
  componentDidMount() {
    // navigator.clipboard.readText().then(text => {
    // });
    // this.props.splitLines(example);
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={4}
        alignItems={"center"}
        className={classes.root}
        direction={"column"}
      >
        <Grid container justify={"center"} xs={10}>
          {/* <MyInput /> */}

          <MainInput />
        </Grid>
        <Grid justify={"center"} container xs={12}>
          {/* <RhymeList /> */}
          <SentenceList />
        </Grid>
      </Grid>
    );
  }
}

const style = {
  root: {
    backgroundColor: "#212121",
    flexGrow: 1
  }
};

export default connect(state => ({}), { splitLines })(withStyles(style)(Main));