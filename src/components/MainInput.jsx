import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { useSelector } from "react-redux";

function MainInput(props) {
	const [word, setWord] = useState("");
	const counter = useSelector(state => state.rhymeBlock);
	console.log(counter);
	return (
		<div>
			{word}
			<KeyboardEventHandler
				handleKeys={["all"]}
				onKeyEvent={(key, e) => {
					console.log("key", key, word);
					if (key === "space") {
						setWord(word + " ");
					} else if (key === "backspace") {
						setWord(word.slice(0, -1));
					} else if (key === "enter") {
						setWord(word + "\n");
					} else {
						setWord(word + key);
					}
				}}
			/>
		</div>
	);
}

export default MainInput;
