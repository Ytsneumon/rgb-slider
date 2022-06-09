import React, { Component } from 'react';
import './CurrentColor.css';

class CurrentColor extends Component {
	render() {
		const red = this.props.red;
		const green = this.props.green;
		const blue = this.props.blue;
		const rgb = `rgb(${red}, ${green}, ${blue})`
		return (
			<div className="CurrentColor" style={{backgroundColor: rgb}}/>
		);
	}
}

export default CurrentColor;
