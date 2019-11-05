import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { useSelector, useDispatch } from "react-redux";
import { handleKey } from "../constants/constants";
import { reset, getWord } from "./actions";

function MainInput(props) {
	const [word, setWord] = useState("");
	const [clipboard, setClipboard] = useState(null);
	const [wordList, setWordList] = useState([]);
	const [countWord, setCountWord] = useState(0);
	const [countLine, setCountLine] = useState(0);
	const rhymeBlock = useSelector(state => state.rhymeBlock);
	const dispatch = useDispatch();
	const storeWord = data => dispatch({ type: "STORE_STUFF", data: data });
	function convert(string) {
		var lines = string.split("\n");
		dispatch(reset());
		lines.map((line, indexSentence) => {
			var sentence = line.split(/[\s,'’"-;]+/);
			sentence.map((item, index) => {
				dispatch(getWord(item, index, indexSentence));
			});
		});
		storeWord(word);
	}
	return (
		<div>
			<div
				style={{
					...style,
				}}>
				{word ? word.substr(word.length - 8) : ""}
			</div>
			<KeyboardEventHandler
				handleKeys={handleKey}
				onKeyEvent={(key, e) => {
					var currentWordList = word.split(/[\s,'’"-;]+/);
					var listSize = currentWordList.length;
					if (key === "space") {
						setWord(word + " ");
						setWordList(word.split(/[\s,'’"-;]+/));
						if (listSize != wordList.length) {
							setCountWord(listSize);
							dispatch(
								getWord(
									currentWordList[listSize - 1],
									countWord,
									countLine
								)
							);
						}
					} else if (key === "backspace") {
						var sliced = word.slice(0, -1);
						var slicedSize = sliced.split(/[\s,'’"-;]+/).length;
						console.log(slicedSize, countWord);
						if (
							word[word.length] !== " " &&
							slicedSize < countWord
						) {
							dispatch({
								type: "DELETE_WORD",
								indexSentence: countLine,
								index: countWord,
							});
							setCountWord(countWord - 1);
						}
						setWord(word.slice(0, -1));
					} else if (key === "enter") {
						setCountLine(countLine + 1);
						setWord(word + "\n");
					} else {
						setWord(word + key);
					}
				}}
			/>
		</div>
	);
}

const style = {
	color: "white",
	fontSize: "2em",
	fontFamily: "Barlow",
	fontWeight: "bold",
	height: "10vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

export default MainInput;
