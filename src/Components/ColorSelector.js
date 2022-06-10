import React, { Component } from 'react';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import './ColorSelector.css';

const style = {width: 200, height: 20};

class ColorSelector extends Component {

	constructor(props) {
		super(props);
		if (this.props.colorValue) {
			this.state = {colorValue: this.props.colorValue}
		} else {
			this.state = {colorValue: 0}
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		let partialState = {};
		partialState[this.props.colorChannel] = value;
		this.props.onColorValueChange(partialState);
	}

	render() {
		return (
			<div className={"ColorSelector"}>
				<div>{this.props.colorChannel.substring(0, 1).toUpperCase()}</div>
				<Slider style={style} max={255} min={0} onChange={this.handleChange} value={this.props.colorValue}/>
				<input id={this.props.colorChannel + 'Value'} type={"text"} value={this.props.colorValue} readOnly={true}></input>
			</div>
		);
	}
}

export default ColorSelector;
