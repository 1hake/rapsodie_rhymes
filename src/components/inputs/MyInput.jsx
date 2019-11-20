import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { connect } from "react-redux";
import { getWord, reset } from "../actions";

class MyInput extends React.Component {
  state = {
    word: ""
  };
  handleChange = name => event => {
    var value = event.target.value;
    this.setState(() => {
      return { word: value };
    });
  };
  handleSubmit() {
    var lines = this.state.word.split("\n");
    this.props.reset();
    lines.map((line, indexSentence) => {
      var sentence = line.split(/[\s,'’"-;]+/);
      sentence.map((item, index) => {
        this.props.getWord(item, index, indexSentence);
      });
    });
  }
  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: "15px",
          width: window.innerWidth / 1.4,
          maxHeight: window.innerHeight - 200
        }}
      >
        <TextField
          id="standard-name"
          multiline
          rowsMax={1}
          label={"Word"}
          onKeyDown={e => this.handleKeyDown(e)}
          onChange={this.handleChange("name")}
          margin="normal"
          value={this.state.word}
        />
        <Button variant={"outlined"} onClick={() => this.handleSubmit()}>
          Submit
        </Button>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  { getWord, reset }
)(MyInput);
