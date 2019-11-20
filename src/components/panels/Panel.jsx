import { Button, Grow } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { Component, default as React } from "react";
import { connect } from "react-redux";
import { vowVerbos } from "../../constants/pattern";
import { storeWord } from "../actions";
import { rhymeColorMatch } from "../../constants/rhymeColorMatch";

class Panel extends Component {
  state = {
    list: []
  };

  addToList(elem) {
    this.setState(state => ({
      ...state,
      list: [...state.list, elem]
    }));
  }

  removePeople(index) {
    var array = [...this.state.list]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ list: array });
    }
  }

  resetState() {
    this.setState(() => ({
      list: []
    }));
  }

  storeWord() {
    var pattern = {};
    this.state.list.map((item, index) => {
      pattern[index] = item;
    });
    this.props.storeWord(this.props.value, pattern);
    this.resetState();
    this.props.close();
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.props.open}
        onClose={() => {
          this.props.close();
          this.resetState();
        }}
        PaperProps={{
          style: {
            backgroundColor: "#303030"
          }
        }}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">
          <div className={classes.wordText}>{this.props.value}</div>
        </DialogTitle>
        {this.state.list.length > 0 && (
          <div className={classes.selectedVowContainer}>
            {this.state.list.map((elem, index) => {
              return (
                <Grow in={true}>
                  <div
                    style={{ backgroundColor: "#3f51b5" }}
                    className={classes.selectedVowItem}
                    onClick={() => this.removePeople(index)}
                  >
                    {elem}
                  </div>
                </Grow>
              );
            })}
          </div>
        )}
        <div className={classes.vowContainer}>
          {Object.keys(vowVerbos).map(item => {
            return (
              <Grow in={true}>
                <div
                  onClick={() => this.addToList(item)}
                  style={{
                    backgroundColor: rhymeColorMatch[vowVerbos[item]]
                  }}
                  className={classes.vowItem}
                >
                  <div className={classes.originalVow}>{vowVerbos[item]}</div>
                  <div className={classes.convertedVow}>{item}</div>
                </div>
              </Grow>
            );
          })}
        </div>
        <Button
          className={classes.buttonStyle}
          onClick={() => this.storeWord()}
        >
          STORE
        </Button>
      </Dialog>
    );
  }
}

const style = {
  root: {
    height: "100vh",
    width: "40%",
    backgroundColor: "#536dfe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    fontWeight: "bold",
    fontSize: "1.3em",
    fontFamily: "Barlow",
    color: "white",
    backgroundColor: "#212121"
  },
  wordText: {
    color: "white",
    fontFamily: "Barlow",
    fontWeight: "bold",
    fontSize: "1.5em"
  },
  vowItem: {
    padding: "10px",
    color: "white",
    borderRadius: "25px",
    width: "30px",
    height: "30px",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    boxShadow: "0px 2px 21px -17px rgba(0,0,0,0.75)"
  },
  selectedVowItem: {
    padding: "10px",
    color: "white",
    borderRadius: "25px",
    height: "15px",
    width: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px"
  },
  vowContainer: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "500px"
  },
  selectedVowContainer: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "500px"
  },
  originalVow: {
    fontSize: "1em",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Barlow"
  },
  convertVow: {
    fontSize: "0.8em",
    color: "white",
    fontFamily: "Barlow"
  }
};

export default connect(
  state => ({}),
  { storeWord }
)(withStyles(style)(Panel));
