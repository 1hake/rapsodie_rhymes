import blue from "@material-ui/core/colors/blue";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import * as firebase from "firebase";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./components/reducer";
import Router from "./Router";

var firebaseConfig = {
  apiKey: "AIzaSyDxh9GNSpLC25SMydfCSFDqBgAWHghRA20",
  authDomain: "rhymes-713f8.firebaseapp.com",
  databaseURL: "https://rhymes-713f8.firebaseio.com",
  projectId: "rhymes-713f8",
  storageBucket: "rhymes-713f8.appspot.com",
  messagingSenderId: "817148267138",
  appId: "1:817148267138:web:9f128f035a30b096"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// export const todosRef = databaseRef.child("todos")

const theme = createMuiTheme({
  palette: {
    primary: blue,
    white: "#ffffff"
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

const style = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(style)(App);
