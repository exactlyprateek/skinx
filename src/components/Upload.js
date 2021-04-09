import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Upload extends React.Component {
	state = {
		files: null,
		disease_type: null,
		username: null,
		password: null,
		disease: null,
		token: null,
		age: 0,
		arr1: [
			'actinic_keratoses',
			'basal_cell_carcinoma',
			'benign_keratosis_like_lesions ',
			'dermatofibroma',
			'melanocytic_nevi',
			'melanoma',
			'vascular_lesions'
		],
		arr2: [
			'Actinic Keratoses',
			'Basal Cell Carcinoma',
			'Benign Keratosis Like Lesions ',
			'Dermatofibroma',
			'Melanocytic Nevi',
			'Melanoma',
			'Vascular Lesions'
		]
	};

	usernameHandler = (event) => {
		this.setState({ username: event.target.value });
	};
	passwordHandler = (event) => {
		this.setState({ password: event.target.value });
	};
	handleFile = (event) => {
		this.setState({
			files: event.target.files[0]
		});
	};
	handleLogin = () => {
		let fd = new FormData();
		fd.append('grant_type', 'password');
		fd.append('username', this.state.username);
		fd.append('password', this.state.username);

		axios({
			method: 'post',
			url: 'http://3.128.170.254:5000/token',
			data: fd,
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				this.setState({
					token: response.data.access_token
				});
				console.log(response.data.access_token);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	handleUpload = () => {
		let formData = new FormData();

		//Adding files to the formdata
		// formData.append('disease', 'melanoma');

		formData.append('file', this.state.files);

		axios({
			method: 'post',
			url: `http://3.128.170.254:5000/skinx?disease=${this.state.disease_type}`,
			data: formData,
			headers: {
				Authorization: `Bearer ${this.state.token}`
			}
		})
			.then((response) => {
				this.setState({
					disease: response.data.disease
				});
				console.log(response.data.disease);
			})
			.catch((response) => {
				//handle error
				console.log(response);
			});
	};
	handleDisease = (event) => {
		this.setState({
			disease_type: event.target.value
		});
		console.log(this.state.disease_type);
	};
	render() {
		return (
			<div>
				<input
					type="text"
					name="username"
					placeholder="username"
					value={this.state.username}
					onChange={this.usernameHandler}
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					value={this.state.password}
					onChange={this.passwordHandler}
				/>
				<button onClick={(e) => this.handleLogin(e)}>Login</button>
				<input type="file" onChange={this.handleFile} />

				<select onChange={(e) => this.handleDisease(e)} value={this.state.disease_type}>
					<option disabled hidden value="" />
					{this.state.arr1.map((x, idx) => <option value={x}>{this.state.arr2[idx]}</option>)}
				</select>
				{this.state.disease ? (
					<div>the disease is {this.state.disease}</div>
				) : (
					<div>click on predict to predict</div>
				)}
				<Button
					style={{ width: '80%' }}
					className="mt-2 mb-4"
					variant="outlined"
					color="primary"
					onClick={(e) => this.handleUpload(e)}
				>
					Predict
				</Button>
			</div>
		);
	}
}

export default Upload;
