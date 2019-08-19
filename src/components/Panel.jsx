import { Button, Grow } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { Component, default as React } from 'react';
import { connect } from 'react-redux';
import { vowVerbos } from '../constants/pattern';
import { storeWord } from './actions';

class Panel extends Component {
	state = {
		list: []
	};

	addToList(elem) {
		this.setState((state) => ({
			...state,
			list: [ ...state.list, elem ]
		}));
	}

	removePeople(index) {
		var array = [ ...this.state.list ]; // make a separate copy of the array
		if (index !== -1) {
			array.splice(index, 1);
			this.setState({ list: array });
		}
	}

	resetState() {
		this.setState(() => ({
			list: []
		}));
	}

	storeWord() {
		var pattern = {};
		this.state.list.map((item, index) => {
			pattern[index] = item;
		});
		this.props.storeWord(this.props.value, pattern);
		this.resetState();
		this.props.close();
	}

	render() {
		const { classes } = this.props;
		console.log(this.state);
		return (
			<Dialog
				open={this.props.open}
				onClose={() => {
					this.props.close();
					this.resetState();
				}}
				aria-labelledby="simple-dialog-title"
			>
				<DialogTitle id="simple-dialog-title">
					<b>{this.props.value}</b>
				</DialogTitle>
				<div className={classes.selectedVowContainer}>
					{this.state.list.map((elem, index) => {
						return (
							<Grow in={true}>
								<div
									style={{ backgroundColor: '#3f51b5' }}
									className={classes.selectedVowItem}
									onClick={() => this.removePeople(index)}
								>
									{elem}
								</div>
							</Grow>
						);
					})}
				</div>
				<div className={classes.vowContainer}>
					{Object.keys(vowVerbos).map((item) => {
						return (
							<Grow in={true}>
								<div
									onClick={() => this.addToList(item)}
									style={{ backgroundColor: 'black' }}
									className={classes.vowItem}
								>
									{vowVerbos[item]}
								</div>
							</Grow>
						);
					})}
				</div>
				<Button onClick={() => this.storeWord()}>STORE</Button>
			</Dialog>
		);
	}
}

const style = {
	root: {
		height: '100vh',
		backgroundColor: '#536dfe',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	vowItem: {
		padding: '10px',
		color: 'white',
		borderRadius: '25px',
		height: '20px',
		width: '20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '5px'
	},
	selectedVowItem: {
		padding: '10px',
		color: 'white',
		borderRadius: '25px',
		height: '15px',
		width: '15px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '5px'
	},
	vowContainer: {
		padding: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexWrap: 'wrap',
		width: '200px'
	},
	selectedVowContainer: {
		padding: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		width: '200px'
	}
};

export default connect((state) => ({}), { storeWord })(withStyles(style)(Panel));
