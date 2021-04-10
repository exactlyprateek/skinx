import React from 'react';
import axios from 'axios';

import {
	Button,
	ButtonGroup,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Input,
	Select,
	Text,
	Link,
	Flex,
	Box,
	Checkbox,
	Stack,
	FormControl,
	Heading,
	useColorModeValue,
	FormLabel
} from '@chakra-ui/react';

class Upload extends React.Component {
	state = {
		files: null,
		disease_type: null,
		username: null,
		password: null,
		disease: null,
		token: null,
		age: 0,
		arr1: [ 'cancer', 'acne', 'melanoma' ],
		arr2: [ 'Cancer', 'Acne', 'Melanoma' ],
		show: false,
		loginLoad: false,
		apiLoading: false
	};
	loginLoadHandler = (event) => {
		this.setState({ loginLoad: event.target.value });
	};
	apiLoadingHandler = (event) => {
		this.setState({ apiLoading: event.target.value });
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
		this.setState({
			loginLoad: true
		});
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
					token: response.data.access_token,
					loginLoad: false
				});
				console.log(response.data.access_token);
			})
			.catch((err) => {
				this.setState({
					loginLoad: false
				});
				console.log(err);
			});
	};
	handleUpload = () => {
		this.setState({
			apiLoading: true
		});
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
					disease: response.data.disease,
					apiLoading: false
				});
				console.log(response.data.disease);
			})
			.catch((response) => {
				//handle error
				console.log(response);
				this.setState({
					apiLoading: false
				});
			});
	};
	handleDisease = (event) => {
		this.setState({
			disease_type: event.target.value
		});
		console.log(this.state.disease_type);
	};
	handleClick = (event) => {
		if (this.state.show === true) {
			this.setState({
				show: false
			});
		} else {
			this.setState({
				show: true
			});
		}
	};
	render() {
		return (
			<div>
				{this.state.token ? (
					<Flex align={'center'} justify={'center'}>
						<Stack spacing={8} maxW={'lg'} px={6}>
							<Stack align={'center'}>
								<Heading fontSize={'3xl'}>SkinX</Heading>
							</Stack>
							<Box rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
								<Stack spacing={4}>
									<FormControl id="email">
										<FormLabel>Select the image file (.jpg, .png)</FormLabel>
										<InputGroup my="4">
											<Input type="file" onChange={this.handleFile} />
										</InputGroup>
										{/* <Input type="email" /> */}
									</FormControl>
									<FormControl id="password">
										<FormLabel>Select the type of disease</FormLabel>
										<InputGroup size="md" my="4">
											<Select
												onChange={(e) => this.handleDisease(e)}
												value={this.state.disease_type}
												variant="outline"
												placeholder="Select Type"
											>
												<option disabled hidden value="" />
												{this.state.arr1.map((x, idx) => (
													<option value={x}>{this.state.arr2[idx]}</option>
												))}
											</Select>
										</InputGroup>
									</FormControl>
									<Stack spacing={10}>
										<Button
											outline="none"
											boxShadow="none"
											border="none"
											transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
											_focus={{
												boxShadow: 'none',
												border: 'none',
												outline: 'none'
											}}
											_active={{
												outline: 'none',
												transform: 'scale(0.94)',
												boxShadow: 'none'
											}}
											isLoading={this.state.apiLoading}
											colorScheme="skin"
											onClick={(e) => this.handleUpload(e)}
										>
											Predict
										</Button>
									</Stack>

									{this.state.disease ? (
										<div>the disease is {this.state.disease}</div>
									) : (
										<Text color="gray.400" bold>
											click on predict to predict
										</Text>
									)}
								</Stack>
							</Box>
						</Stack>
					</Flex>
				) : (
					<Flex align={'center'} justify={'center'}>
						<Stack spacing={8} maxW={'lg'} px={6}>
							<Stack align={'center'}>
								<Heading fontSize={'3xl'}>Sign in to use SkinX</Heading>
							</Stack>
							<Box rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
								<Stack spacing={4}>
									<FormControl id="email">
										<FormLabel>Username</FormLabel>
										<InputGroup my="4">
											<Input
												type="text"
												name="username"
												value={this.state.username}
												onChange={this.usernameHandler}
												placeholder="username"
											/>
										</InputGroup>
										{/* <Input type="email" /> */}
									</FormControl>
									<FormControl id="password">
										<FormLabel>Password</FormLabel>
										<InputGroup size="md" my="4">
											<Input
												type="password"
												name="password"
												placeholder="password"
												value={this.state.password}
												onChange={this.passwordHandler}
												pr="4.5rem"
												type={this.state.show ? 'text' : 'password'}
												placeholder="Enter password"
											/>
											<InputRightElement width="4.5rem">
												<Button
												outline="none"
												boxShadow="none"
												border="none"
												transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
												_focus={{
													boxShadow: 'none',
													border: 'none',
													outline: 'none'
												}}
												_active={{
													outline: 'none',
													transform: 'scale(0.94)',
													boxShadow: 'none'
												}}
													colorScheme="skin"
													h="1.75rem"
													size="sm"
													onClick={(e) => this.handleClick(e)}
												>
													{this.state.show ? 'Hide' : 'Show'}
												</Button>
											</InputRightElement>
										</InputGroup>
									</FormControl>
									<Stack spacing={10}>
										<Button
										outline="none"
										boxShadow="none"
										border="none"
										transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
										_focus={{
											boxShadow: 'none',
											border: 'none',
											outline: 'none'
										}}
										_active={{
											outline: 'none',
											transform: 'scale(0.94)',
											boxShadow: 'none'
										}}
											isLoading={this.state.loginLoad}
											colorScheme="skin"
											onClick={(e) => this.handleLogin(e)}
										>
											Sign in
										</Button>
									</Stack>
								</Stack>
							</Box>
						</Stack>
					</Flex>
				)}
			</div>
		);
	}
}

export default Upload;
