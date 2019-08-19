import { CircularProgress, Grow, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { consPattern, vowVerbos } from '../constants/pattern';
import { rhymeColorMatch } from '../constants/rhymeColorMatch';

class RhymeList extends Component {
	render() {
		const { classes } = this.props;
		const sortedRhymes = this.props.content.sort((a, b) => {
			return a.index - b.index;
		});
		return (
			<div className={classes.root}>
				<div className={classes.index}>{sortedRhymes[0].indexSentence + 1}</div>
				{sortedRhymes ? (
					sortedRhymes.map((elem, index) => {
						return (
							elem && (
								<Grow in={true} direction="up">
									<div className={classes.word}>
										<Typography>{elem.word}</Typography>
										<div className={classes.wordContainer}>
											{elem && elem.rhymes ? (
												elem.rhymes.map((text) => {
													const vow = text.replace(consPattern, '');
													console.log(vow);
													return (
														elem.word.length > 1 && (
															<Grow in={true} unmountOnExit timeout={index + 500}>
																<p
																	style={{
																		backgroundColor: rhymeColorMatch[vowVerbos[vow]]
																	}}
																	className={classes.item}
																	// onClick={() =>
																	// 	this.props.isClicked(elem.word.toLowerCase())}
																>
																	{vowVerbos[vow]}
																</p>
															</Grow>
														)
													);
												})
											) : (
												<Grow in={true} unmountOnExit>
													<p
														onClick={() => this.props.isClicked(elem.word)}
														className={classes.noItem}
													>
														{elem.word}
													</p>
												</Grow>
											)}
										</div>
									</div>
								</Grow>
							)
						);
					})
				) : (
					<CircularProgress />
				)}
			</div>
		);
	}
}

const style = {
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		width: '100%',
		padding: '3px'
	},
	wordContainer: {
		display: 'flex'
	},

	word: {
		fontSize: '1em',
		color: 'black',
		fontFamily: 'Montserrat',
		padding: '5px',
		display: 'flex',
		flexDirection: 'column ',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: '3px',
		marginTop: '3px'
	},
	item: {
		fontSize: '0.7em',
		fontWeight: 'bold',
		color: 'black',
		height: '10px',
		width: '10px',
		borderRadius: '100%',
		backgroundColor: 'white',
		padding: '10px',
		alignItems: 'center',
		marginLeft: '5px',
		display: 'flex',
		justifyContent: 'center',
		boxShadow: '0px 2px 21px -5px rgba(0,0,0,0.75)'
	},
	noItem: {
		fontSize: '0.5em',
		fontWeight: 'bold',
		color: 'white',
		height: '10px',
		width: '10px',
		borderRadius: '100%',
		backgroundColor: '#c62828',
		padding: '10px',
		alignItems: 'center',
		marginLeft: '5px',
		display: 'flex',
		justifyContent: 'center',
		boxShadow: '0px 2px 21px -5px rgba(0,0,0,0.75)'
	},
	index: {
		fontSize: '1.2em',
		fontWeight: 'bold',
		marginLeft: '3px'
	}
};

export default connect(
	(state) => ({
		rhymeBlock: state.rhymeBlock
	}),
	{}
)(withStyles(style)(RhymeList));
