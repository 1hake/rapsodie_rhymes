import { CircularProgress, Grow, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { consPattern, vowVerbos } from "../constants/pattern";
import { rhymeColorMatch } from "../constants/rhymeColorMatch";
import WhiteSpace from "./WhiteSpace";

class RhymeList extends Component {
	render() {
		const { classes } = this.props;
		const sortedRhymes = this.props.content.sort((a, b) => {
			return a.index - b.index;
		});
		return (
			<div
				className={classes.root}
				style={{
					backgroundColor:
						(sortedRhymes[0].indexSentence + 1) % 2 == 1
							? "#212121"
							: "#303030",
				}}>
				<div className={classes.index}>
					<div>{sortedRhymes[0].indexSentence + 1}.</div>
				</div>
				<div className={classes.rhymeContainer}>
					{sortedRhymes ? (
						sortedRhymes.map((elem, index) => {
							return (
								elem && (
									<Grow in={true} direction="up">
										<div className={classes.word}>
											<div className={classes.wordText}>
												{elem.word}
											</div>
											<WhiteSpace />
											<div
												className={
													classes.wordContainer
												}>
												{elem && elem.rhymes ? (
													elem.rhymes.map(text => {
														const vow = text.replace(
															consPattern,
															""
														);
														console.log(vow);
														return (
															elem.word.length >
																1 && (
																<Grow
																	in={true}
																	unmountOnExit
																	timeout={
																		index +
																		500
																	}>
																	<div
																		style={{
																			backgroundColor:
																				rhymeColorMatch[
																					vowVerbos[
																						vow
																					]
																				],
																		}}
																		className={
																			classes.item
																		}
																		// onClick={() =>
																		// 	this.props.isClicked(elem.word.toLowerCase())}
																	>
																		<div
																			className={
																				classes.originalVow
																			}>
																			{
																				vowVerbos[
																					vow
																				]
																			}
																		</div>

																		<div
																			className={
																				classes.convertVow
																			}>
																			{
																				vow
																			}
																		</div>
																	</div>
																</Grow>
															)
														);
													})
												) : (
													<Grow
														in={true}
														unmountOnExit>
														<p
															onClick={() =>
																this.props.isClicked(
																	elem.word
																)
															}
															className={
																classes.noItem
															}>
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
			</div>
		);
	}
}

const style = {
	root: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexWrap: "no-wrap",
		width: "100%",
	},
	wordContainer: {
		display: "flex",
	},
	wordText: {
		fontSize: "1.5em",
		fontFamily: "Barlow",
		fontWeight: "bold",
		color: "white",
	},
	rhymeContainer: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	word: {
		fontSize: "1em",
		color: "black",
		fontFamily: "Montserrat",
		padding: "5px",
		display: "flex",
		flexDirection: "column ",
		alignItems: "center",
		justifyContent: "center",
		margin: "5px",

		borderRadius: "25px",
		height: "100px",
	},
	item: {
		fontSize: "0.7em",
		minWidth: "15px",
		fontWeight: "bold",
		color: "black",
		borderRadius: "25px",
		backgroundColor: "white",
		padding: "10px",
		alignItems: "center",
		margin: "2px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
	noItem: {
		fontSize: "0.5em",
		fontWeight: "bold",
		color: "white",
		height: "10px",
		width: "10px",
		borderRadius: "100%",
		backgroundColor: "#c62828",
		padding: "10px",
		alignItems: "center",
		marginLeft: "5px",
		display: "flex",
		justifyContent: "center",
		boxShadow: "0px 2px 21px -5px rgba(0,0,0,0.75)",
	},
	index: {
		height: "120px",
		color: "white",
		fontSize: "1.2em",
		fontWeight: "bold",
		marginLeft: "3px",
		marginRight: "10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "20px",
	},
	originalVow: {
		fontSize: "1.6em",
		color: "black",
		fontWeight: "bold",
		fontFamily: "Barlow",
	},
	convertVow: {
		fontSize: "1.2em",
		color: "white",
		fontFamily: "Barlow",
	},
};

export default connect(
	state => ({
		rhymeBlock: state.rhymeBlock,
	}),
	{}
)(withStyles(style)(RhymeList));
