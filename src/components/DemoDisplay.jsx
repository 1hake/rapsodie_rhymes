import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DemoDisplay extends Component {
	render() {
		const { classes } = this.props;
		console.log(this.props.currentWordList, this.props.list);
		return <div className={classes.root} />;
	}
}

const style = {
	root: {
		height: '100vh',
		backgroundColor: '#536dfe',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export default connect((state) => ({ currentWordList: state.currentWordList, list: state.transformedSentence }), {})(
	withStyles(style)(DemoDisplay)
);
