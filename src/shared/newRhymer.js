import { myDic } from "../constants/finalDic";

export function getWordList(sentence) {
  var re = /[\ ][\']/;
  var unquote = sentence.replace(/'|-/gi, " ").replace(",", "");
  var words = unquote.toLowerCase().split(" ");
  var finalist = [];
  if (words.length > 1) {
    words.map(word => {
      var soundList = [];
      Object.keys(myDic).map(key => {
        if (word.includes(key)) {
          soundList.push({ sounds: myDic[key], key: key });
        }
      });
      finalist.push(soundList);
    });
  }
  console.log(finalist);
  return finalist;
}
