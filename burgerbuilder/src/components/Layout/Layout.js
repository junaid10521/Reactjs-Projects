import React, {Component} from 'react';
import {connect} from 'react-redux';
import Auxiliary from '../../hoc/auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}

	render () {
		return (
				<Auxiliary>
					<Toolbar 
					isAuth = {this.props.isAuthenticated}
					drawerToggleClicked = {this.sideDrawerToggleHandler} />
					<SideDrawer 
					isAuth = {this.props.isAuthenticated}
					closed = {this.sideDrawerClosedHandler}
					open = {this.state.showSideDrawer} />
					<main className = {classes.Content}>
						{this.props.children}
					</main>
				</Auxiliary>
			)
	}
} 

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(Layout);