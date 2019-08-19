import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Panel from './Panel';
import RhymeList from './RhymeList';

var groupBy = function(xs, key) {
	return xs.reduce(function(rv, x) {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
};

class SentenceList extends Component {
	state = {
		open: false
	};

	wordIsClicked = (word) => {
		this.setState(() => ({
			open: true,
			value: word
		}));
	};

	setPanelClose() {
		console.log('heyyy');

		this.setState(() => ({
			open: false
		}));
	}

	render() {
		const { classes } = this.props;
		const sortedRhymes = this.props.rhymeBlock.sort((a, b) => {
			return a.indexSentence - b.indexSentence;
		});
		let sentences = groupBy(sortedRhymes, 'indexSentence');
		console.log('lastsentence', this.state);
		if (sentences)
			return (
				<div className={classes.root}>
					{sentences &&
						Object.keys(sentences).map((key) => {
							return <RhymeList content={sentences[key]} isClicked={this.wordIsClicked} />;
						})}
					<Panel value={this.state.value} close={() => this.setPanelClose()} open={this.state.open} />
				</div>
			);
	}
}

const style = {
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		width: '95%',
		padding: '3px',
		boxShadow: '0px 2px 21px -17px rgba(0,0,0,0.75)',
		borderRadius: '25px',
		backgroundColor: 'white',
		overflow: 'auto',
		height: window.innerHeight - 200
	}
};

export default connect(
	(state) => ({
		rhymeBlock: state.rhymeBlock
	}),
	{}
)(withStyles(style)(SentenceList));
