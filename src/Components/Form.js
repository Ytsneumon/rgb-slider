import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.saveColor = this.saveColor.bind(this);
	}

	render() {
		return (
			<div className={"SaveForm"}>
				<label htmlFor={"colorName"}>Name</label>
				<input type={"text"} id={"colorName"}/>
				<button id={"saveButton"} onClick={this.saveColor}>Speichern</button>
			</div>
		);
	}

	saveColor() {
		let formData = this.getFormData();
		fetch('api/save.php', {
			method: 'POST',
			body: formData
		}).then((response) => {
			if (response.ok) {
				console.log('color saved!');
			} else {
				console.error('Color not saved :(');
			}
		})
	}

	getFormData() {
		let red = document.querySelector('#redValue').value;
		let green = document.querySelector('#greenValue').value;
		let blue = document.querySelector('#blueValue').value;
		let colorName = document.querySelector('#colorName').value;
		let formData = new FormData();
		formData.append('colorName', colorName);
		formData.append('red', red);
		formData.append('green', green);
		formData.append('blue', blue);
		return formData;
	}
}

export default Form;
