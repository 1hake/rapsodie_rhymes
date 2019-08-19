import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

class Main extends Component {
	render() {
		const { classes } = this.props;
		return <div className={classes.root}>Colin</div>;
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

export default connect((state) => ({}), {})(withStyles(style)(Main));
