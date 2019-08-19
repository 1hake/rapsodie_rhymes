import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Slide, Grow, Typography } from '@material-ui/core';

class WordList extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{this.props.list.map((word, index) => {
					return (
						word.length > 0 && (
							<Grow key={index} in={word.length > 0}>
								<div className={classes.word}>
									<div className={classes.text}>{word}</div>
								</div>
							</Grow>
						)
					);
				})}
			</div>
		);
	}
}

const style = {
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '83%'
	},
	word: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: 'white',
		padding: '10px',
		borderRadius: '25px',
		marginLeft: '5px',
		boxShadow: '-1px 17px 43px -13px rgba(0,0,0,0.75)'
	},
	item: {
		height: '30px',
		width: '30px',
		backgroundColor: '#3f51b5',
		color: 'white',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '-1px 17px 43px -13px rgba(0,0,0,0.75)',

		fontWeight: 'bold'
	},
	text: {
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		padding: '5px'
	}
};

export default connect((state) => ({ list: state.currentWordList }), {})(withStyles(style)(WordList));
