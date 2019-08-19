import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { connect } from 'react-redux';
import { getWord, reset } from './actions';

class MyInput extends React.Component {
	state = {
		word: ''
	};
	handleChange = (name) => (event) => {
		var value = event.target.value;
		// var wordList = value.split(' ').filter((item) => {
		// 	return item !== '';
		// });
		// const wordCount = wordList.length;
		// if (value.includes(' ')) {
		// 	console.log(wordCount);
		// 	console.log(wordList);
		// 	if (wordCount >= this.state.wordCount + 1) {
		// 		console.log('wjirew', wordList[wordCount - 1]);
		// 		this.props.getWord(wordList[wordCount - 1]);
		// 	}
		// }
		this.setState(() => {
			return { word: value };
		});
	};
	handleSubmit() {
		var lines = this.state.word.split('\n');
		console.log(lines);
		this.props.reset();
		lines.map((line, indexSentence) => {
			var sentence = line.split(/[\s,'’"-;]+/);
			sentence.map((item, index) => {
				this.props.getWord(item, index, indexSentence);
			});
		});
	}
	handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			this.handleSubmit();
		}
	};
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
					padding: '15px',
					maxHeight: window.innerHeight - 200
				}}
			>
				<TextField
					id="standard-name"
					multiline
					rowsMax={25}
					label={'Word'}
					onKeyDown={(e) => this.handleKeyDown(e)}
					onChange={this.handleChange('name')}
					margin="normal"
					value={this.state.word}
				/>
				<Button variant={'outlined'} onClick={() => this.handleSubmit()}>
					Submit
				</Button>
			</div>
		);
	}
}

export default connect((state) => ({}), { getWord, reset })(MyInput);
