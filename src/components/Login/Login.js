import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function Login({ setToken }) {
	const [ username, setUserName ] = useState();
	const [ password, setPassword ] = useState();
	const [ files, setFiles ] = useState();
    function handleFile (event) {
		// Getting the files from the input
		setFiles( event.target.files[0]);
	};
    function handleUpload() {
		let formData = new FormData();
		let fd = new FormData();
		//Adding files to the formdata
		// formData.append('disease', 'melanoma');
		fd.append('grant_type', 'password');
		fd.append('username', '123');
		fd.append('password', '123');

		formData.append('file', this.state.files);
		
		axios({
			method: 'post',
			url: 'http://3.128.170.254:5000/token',
			data: fd,
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then(function(response) {
				//handle success
				// this.setState((access_token = response.data.access_token));
				axios({
					method: 'post',
					url: 'http://3.128.170.254:5000/skinx?disease=melanoma',
					data: formData,
					headers: {
						Authorization: `Bearer ${response.data.access_token}`
					 }
				}).then(function(response) {
					console.log(response);
				}).catch(function(response) {
					//handle error
					console.log(response);
				});
				
		
				console.log(response.data.access_token);
			})
			.catch(function(response) {
				//handle error
				console.log(response);
			});
		
	}
	return (
		<div className="login-wrapper">
			<h1>Please Log In</h1>
			<form>
				<label>
					<p>Username</p>
					<input type="text" onChange={(e) => setUserName(e.target.value)} />
				</label>
				<label>
					<p>Password</p>
					<input type="password" onChange={(e) => setPassword(e.target.value)} />
				</label>
                <label>
					<p>Password</p>
					<input type="file" onChange={(e) => handleFile(e.target.value[0])} />
				</label>
				<div>
					<button onclick={handleUpload} type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
Login.propTypes = {
	setToken: PropTypes.func.isRequired
};
