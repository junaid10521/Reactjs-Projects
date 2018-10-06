import React from 'react';
import classes from './BuiltControls.css';
import BuiltControl from './BuiltControl/BuiltControl';

const controls = [
	{ label: 'Salad', type: 'salad'},
	{ label: 'Bacon', type: 'bacon'},
	{ label: 'Cheese', type: 'cheese'},
	{ label: 'Meat', type: 'meat'},
	{ label: 'Egg', type: 'egg'}
];
const builtControls = (props) => (
	<div className = {classes.BuiltControls}>
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
				<BuiltControl 
				key = {ctrl.label} 
				label = {ctrl.label}
				added = {() => props.ingredientAdded(ctrl.type)}
				removed = {() => props.ingredientRemoved(ctrl.type)}
				disabled = {props.disabled[ctrl.type]} />
			))}
		<button 
		className = {classes.OrderButton}
		disabled = {!props.purchasable}
		onClick = {props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN-UP TO PLACE ORDER'}</button>
	</div>
);

export default builtControls;