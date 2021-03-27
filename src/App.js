import './App.css';
// import { Container, Row, Col } from 'react-bootstrap';

import MyDropzone from './components/MyDropzone';
import FullWidthGrid from './components/Main';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
import './components/styles/style.css';
const URL = 'http://18.218.101.160:5000/upload_file';
function App() {
	return (
		<div className="App">
			
				<FullWidthGrid />
		
			{/* <Container>
				<Row className="center">
					<h2 className="text-uppercase font-weight-bold pl-4 ml-1 mt-4">Skin Cancer Detection</h2>
				</Row>
        <Row >
					<h5 className="text-uppercase font-weight-bold pl-4 ml-1 mt-4">Skin Cancer Detection ML App</h5>
				</Row>
				<Row className="center">
					<Col sm={12} md={6}>
						<MyDropzone />
					</Col>
					<Col sm={12} md={6}>
						<DropdownButton className="center" id="dropdown-basic-button" title="Dropdown button">
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</DropdownButton>
            <select>
              <option>lmo</option>
              <option>lmo</option>
              <option>lmo</option>
            </select>
					</Col>
				</Row>
			</Container> */}
		</div>
	);
}

export default App;

// import React, { Component, useState } from 'react';
// import axios from 'axios';
// var bodyFormData = new FormData();
// bodyFormData.append('userName', 'Fred');
// bodyFormData.append('image', imageFile);
// let url = 'http://18.218.101.160:5000/upload_file';
// function App() {
// 	function handleSubmit() {
// 		axios
// 			.post(url, bodyFormData, {
// 				headers: {
// 					'content-type': 'multipart/form-data'
// 				}
// 			})
// 			.then((res) => {
// 				console.log(res.data);
// 			})
// 			.catch((err) => console.log(err));
// 	}
//   let [image,setImage] = useState(null);

// 	return (
// 		<div className="post">
// 			<form className="post" onSubmit={handleSubmit}>
// 				<input type="file" id="image" accept="image/png, image/jpeg" onChange={setImage} required />
// 				<textarea placeholder="Body" required />
// 				<button type="submit">Create Post</button>
// 			</form>
// 		</div>
// 	);
// }
// export default App;
