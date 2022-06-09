import React, { Component } from 'react';
import ColorSelector from "./ColorSelector";
import CurrentColor from "./CurrentColor";
import './RGBSlider.css';

class RGBSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			red: 255,
			green: 255,
			blue: 255
		}
		this.handleValueChange = this.handleValueChange.bind(this);
	}

	render() {
		return (
			<div className={"RGBSlider"}>
				<div>
					<ColorSelector colorChannel={'red'} colorValue={this.state.red} onColorValueChange={this.handleValueChange}/>
					<ColorSelector colorChannel={'green'} colorValue={this.state.green} onColorValueChange={this.handleValueChange}/>
					<ColorSelector colorChannel={'blue'} colorValue={this.state.blue} onColorValueChange={this.handleValueChange}/>
				</div>
				<CurrentColor red={this.state.red} green={this.state.green} blue={this.state.blue}/>
			</div>
		);
	}

	handleValueChange(value) {
		this.setState(Object.assign(this.state, value));
	}
}

export default RGBSlider;
