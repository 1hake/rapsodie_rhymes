import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyInput from './MyInput';
import SentenceList from './SentenceList';

class Main extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={4} alignItems={'center'} className={classes.root}>
				<Grid container xs={2}>
					<MyInput />
				</Grid>
				<Grid container xs={10}>
					{/* <RhymeList /> */}
					<SentenceList />
				</Grid>
			</Grid>
		);
	}
}

const style = {
	root: {
		height: '100vh',
		backgroundColor: '#3f51b5',
		flexGrow: 1
	}
};

export default connect((state) => ({}), {})(withStyles(style)(Main));
