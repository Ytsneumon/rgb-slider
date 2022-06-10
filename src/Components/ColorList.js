import React, { Component } from 'react';
import './ColorList.css';
import ColorListItem from "./ColorListItem";

class ColorList extends Component {
	render() {
		const colorList = [];
		if (this.state && this.state.colors) {
			for (let color of this.state.colors) {
				colorList.push(<ColorListItem name={color.name} red={color.red} green={color.green} blue={color.blue}/>);
			}
		}
		return (
			<div className={"SavedColors"}>
				Gespeicherte Farben
				<ul id={"colorList"}>{colorList}</ul>
			</div>
		);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.fetchAllSavedColors();
		}, 500);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	fetchAllSavedColors() {
		fetch('api/all.php', {
			method: 'GET'
		}).then((response) => {
			if (response.ok) {
				response.json().then((data) => {
					this.setState({colors: data});
				})
			} else {
				console.error('Not possible to get all colors. :(');
			}
		}).catch();
	}
}

export default ColorList;
