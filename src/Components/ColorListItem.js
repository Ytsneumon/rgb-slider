import React, { Component } from 'react';
import CurrentColor from './CurrentColor';
import './ColorListItem.css';

class ColorListItem extends Component {
	render() {
		return (
			<li className={"SavedColor"}>
				<span>R {('000'+this.props.red).slice(-3)} G {('000'+this.props.green).slice(-3)} B {('000'+this.props.blue).slice(-3)}</span><CurrentColor red={this.props.red} green={this.props.green} blue={this.props.blue}/><span>{this.props.name}</span>
			</li>
		);
	}
}

export default ColorListItem;
