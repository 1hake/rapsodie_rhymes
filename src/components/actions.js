import { db } from "../App";

export const ACTIONS = {
  DO_NOTHING: "DO_NOTHING",
  SET_ERROR: "SET_ERROR",
  SET_LOADING: "SET_LOADING",
  SET_LOADING_FALSE: "SET_LOADING_FALSE",
  STORE_DATA: "STORE_DATA",
  RESET: "RESET"
};

export function doNothing() {
  return {
    type: "DO_NOTHING",
    data: null
  };
}

export function setLoading(bool) {
  return {
    type: "SET_LOADING",
    data: bool
  };
}

export function reset() {
  return {
    type: "RESET"
  };
}

export function getRhymesPattern(rhymeBlock) {
  return null;
}

export function storeWord(original, pattern) {
  const word = original.toLowerCase();
  return dispatch => {
    return fetch(
      fetch(
        "https://rhymes-713f8.firebaseio.com/" + word[0] + "/" + word + ".json",
        {
          method: "PUT",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pattern)
        }
      )
    );
  };
}

export function getWord(original, index, indexSentence) {
  const word = original.toLowerCase();

  return dispatch => {
    ("fetched ONNNN");
    fetch(
      "https://rhymes-713f8.firebaseio.com/" + word[0] + "/" + word + ".json",
      {
        method: "GET",
        mode: "cors",
        headers: new Headers({ "Content-Type": "application/json" })
      }
    ).then(res => {
      res.json().then(data => {
        if (!data) {
          var docRef = db.collection("words");
          docRef
            .where("word", "==", word)
            .get()
            .then(function(querySnapshot) {
              if (querySnapshot.empty) {
                dispatch({
                  type: "STORE_DATA",
                  data: null,
                  word: original,
                  index: index,
                  indexSentence: indexSentence
                });
              } else {
                querySnapshot.forEach(function(doc) {
                  if (doc.data().word === word) {
                    dispatch({
                      type: "STORE_DATA",
                      data: doc.data().pattern,
                      word: original,
                      index: index,
                      indexSentence: indexSentence
                    });
                  } else {
                  }
                });
              }
            })
            .catch(function(error) {
              console.log("Error getting document:", error);
            });
        } else {
          dispatch({
            type: "STORE_DATA",
            data: data,
            word: original,
            index: index,
            indexSentence: indexSentence
          });
        }
      });
    });
  };
}

export function splitLines(content) {
  var lines = content.split("\n");
  reset();
  lines.map((line, indexSentence) => {
    var sentence = line.split(/[\s,'’"-;]+/);
    sentence.map((item, index) => {
      if (item) {
        getWord(item, index + 1, indexSentence);
      }
    });
  });
}
