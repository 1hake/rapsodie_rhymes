import { groupBy } from "../shared/Tools";
import { consPattern } from "../constants/pattern";

function matchRhymes(punchs, rhymeLen) {
  let matchs = [];
  // for (var n = rhymeLen; n > 1; n--) {
  for (var i = 0; i < punchs.length; i++) {
    console.log("i:", i);
    const punch = punchs[i];
    for (var j = 0; j < punchs.length; j++) {
      if (j > i) {
        const candidate = punchs[j];
        var matching = 1;
        for (var k = 0; k < punch.length; k++) {
          if (punch[k] !== candidate[k]) {
            matching = 0;
          }
        }
        if (matching) {
          // push object with index info etc...
          var isDone = false;
          var isMatched = null;

          matchs = updateMatches(matchs, punch, i);
          matchs = updateMatches(matchs, candidate, j);
        }
      }
    }
  }
  // }
  return matchs;
}

function updateMatches(matchs, punch, i) {
  var isDone = false;
  var isMatched = null;
  for (var m = 0; m < matchs.length; m++) {
    if (matchs[m].index.includes(i)) {
      isDone = true;
    }
  }
  if (!isDone) {
    console.log("not Done", i);
    for (var p = 0; p < matchs.length; p++) {
      var newMatching = 1;
      for (var q = 0; q < punch.length; q++) {
        // console.log("punch", punch, q)
        console.log("comparaison", punch, punch[q], matchs[p].matchedPunch[q]);
        if (punch[q] !== matchs[p].matchedPunch[q]) {
          console.log("difference");
          newMatching = 0;
        }
      }
      if (newMatching) {
        isMatched = p + 1;
      }
    }
    console.log(isMatched);
    if (isMatched) {
      console.log("isMatched", i, isMatched - 1);
      matchs[isMatched - 1].index.push(i);
    } else {
      var array = [];
      array.push(i);
      console.log("pushed", punch);
      matchs.push({ index: array, matchedPunch: punch });
    }
  }
  return matchs;
}

function plainRhymes(last) {
  const arr = [];
  Object.keys(last).map((key) => {
    var rhymes = [];
    Object.keys(last[key]).map((newKey) => {
      last[key][newKey].rhymes &&
        last[key][newKey].rhymes.map((item) => {
          rhymes.push(item.replace(consPattern, ""));
        });
    });
    arr.push(rhymes);
  });
  return arr;
}

function extractLastX(list, n) {
  return list.splice(list.length - n, n);
}

export function patternize(rhymeBlock, window) {
  const sentences = groupBy(rhymeBlock, "indexSentence");
  Object.keys(sentences).map((key) => {
    return sentences[key].sort((a, b) => {
      return a.index - b.index;
    });
  });
  // Object.keys(sentences).map((key) => {
  //   return sentences[key].map((item) => {
  //     if (item.match(consPattern)) {
  //       return item;
  //     }
  //   });
  // });
  const plained = plainRhymes(sentences);
  var maxRhymeLen = 3;
  var plainExtracted = plained.map((item) => {
    return extractLastX(item, maxRhymeLen);
  });
  var matches = matchRhymes(plainExtracted, maxRhymeLen);
  console.log("OBJECT", matches);

  return (dispatch) => dispatch({ type: "ADD_MATCHES", data: matches });
}
