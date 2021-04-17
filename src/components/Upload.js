import React from 'react';
import axios from 'axios';

import {
	Button,
	InputGroup,
	InputRightElement,
	Input,
	Alert,
	Flex,
	Box,
	Stack,
	FormControl,
	Heading,
	FormLabel,
	Text,
	AlertIcon,
	Image,
	Center
} from '@chakra-ui/react';

import News from './News';
import Similar from './Similar';
class Upload extends React.Component {
	state = {
		files: null,
		disease_type: null,
		username: null,
		password: null,
		disease: null,
		token: null,
		age: 0,
		arr1: [ 'cancer', 'melanoma' ],
		arr2: [ 'Assess Type of Cancer', 'Assess Malignancy' ],
		show: false,
		loginLoad: false,
		apiLoading1: false,
		apiLoading2: false,
		name: '',
		invalid: false,
		img_url: null
	};
	loginLoadHandler = (event) => {
		this.setState({ loginLoad: event.target.value });
	};
	apiLoadingHandler1 = (event) => {
		this.setState({ apiLoading1: event.target.value });
	};
	apiLoadingHandler2 = (event) => {
		this.setState({ apiLoading2: event.target.value });
	};
	usernameHandler = (event) => {
		this.setState({ username: event.target.value });
	};
	passwordHandler = (event) => {
		this.setState({ password: event.target.value });
	};
	handleFile = (event) => {
		console.log(event.target.files[0]);
		this.setState({
			files: event.target.files[0],
			name: event.target.files[0].name,
			img_url: URL.createObjectURL(event.target.files[0]),
			invalid: false
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

		axios
			.post('http://3.128.170.254:5000/token', fd)
			.then((response) => {
				this.setState({
					token: response.data.access_token,
					loginLoad: false
				});
				console.log(response.data.access_token);
				localStorage.setItem('token', JSON.stringify(response.data.access_token));
				window.location.reload();
			})
			.catch((err) => {
				this.setState({
					loginLoad: false
				});
				console.log(err);
			});
	};
	handleCancerUpload = () => {
		this.setState({
			apiLoading1: true
		});
		let formData = new FormData();

		//Adding files to the formdata
		// formData.append('disease', 'melanoma');

		formData.append('file', this.state.files);

		axios
			.post(
				`http://3.128.170.254:5000/skinx?disease=cancer`,
				formData,
				{
					headers: { Authorization: `Bearer ${this.state.token}` }
				}
				// , {
				// 	onUploadProgress:  (progressEvent) => {
				// 		console.log('upload progress:' + Math.round (progressEvent.loaded / progressEvent.total * 100) + "%" );
				// 	}
				// }
			)
			.then((response) => {
				this.setState({
					disease: response.data.disease,
					apiLoading1: false
				});

				if (response.data === 'Please upload a valid image') {
					this.setState({
						invalid: true,
						apiLoading1: false
					});
				}
				console.log(response);
			})
			.catch((response) => {
				//handle error
				console.log(response);
				this.setState({
					apiLoading1: false
				});
			});
	};
	handleMelanomaUpload = () => {
		this.setState({
			apiLoading2: true
		});
		let formData = new FormData();

		//Adding files to the formdata
		// formData.append('disease', 'melanoma');

		formData.append('file', this.state.files);

		axios({
			method: 'post',
			url: `http://3.128.170.254:5000/skinx?disease=melanoma`,
			data: formData,
			headers: {
				Authorization: `Bearer ${this.state.token}`
			}
		})
			.then((response) => {
				this.setState({
					disease: response.data.disease,
					apiLoading2: false
				});

				if (response.data === 'Please upload a valid image') {
					this.setState({
						invalid: true,
						apiLoading2: false
					});
				}
				console.log(response);
			})
			.catch((response) => {
				//handle error
				console.log(response);
				this.setState({
					apiLoading2: false
				});
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

				if (response.data === 'Please upload a valid image') {
					this.setState({
						invalid: true,
						apiLoading: false
					});
				}
				console.log(response);
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
	cleanUp = (event) => {
		this.setState({
			disease: null
		});
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
	componentDidMount() {
		if (localStorage.getItem('token')) {
			this.setState({
				token: localStorage.getItem('token')
			});
		} else {
			this.setState({
				token: null
			});
		}
	}
	render() {
		return (
			<div id="upload">
				{this.state.token ? (
					<Flex align={'center'} justify={'center'} p={[ '0' ]} w="100%">
						<Stack spacing={4} width="30rem">
							<Heading align="center" color="white" className="font text-shadow" fontSize="3xl">
								This is a Caption
							</Heading>
							<Box
								
								overflow="scroll"
								style={{ scrollbarWidth: 'none', marginBottom: "2rem" }}
								rounded="md"
								bg="white"
								boxShadow={'lg'}
								p={6}
							>
								{!this.state.disease ? (
									<Stack spacing={2}>
										<FormControl id="email">
											<FormLabel>Select the image file (.jpg, .png)</FormLabel>
											<InputGroup my="4">
												<Input
													display="none"
													p="1.5"
													accept="image/*"
													type="file"
													onChange={this.handleFile}
													ref={(fileInput) => (this.fileInput = fileInput)}
												/>
												<Button width="100%" onClick={() => this.fileInput.click()}>
													{this.state.files ? <p>Select Another</p> : <p>Browse </p>}
												</Button>
											</InputGroup>
											<InputGroup my="4">
												{/* <Text mx="2" noOfLines="1" isTruncated>
												{this.state.name}
											</Text> */}
											</InputGroup>

											{this.state.img_url ? (
												<Center>
													<Image
													transition= "all 0.2s cubic-bezier(.39,.58,.57,1);"
													_active={{
														outline: 'none',
														transform: 'scale(0.94)',
														boxShadow: 'none'
													}}
													_hover={{boxShadow: "1px 0px 22px grey", transform: "scale(1.01)"}}
													rounded="md"
														width="70%"
														mx="0"
														src={this.state.img_url}
														alt="selected image"
													/>
												</Center>
											) : null}
											{/* <Input type="email" /> */}
										</FormControl>
										<FormControl>
											<FormLabel>Run Assessment For</FormLabel>
											{/* <InputGroup size="md" my="4">
											<Select
												onChange={(e) => this.handleDisease(e)}
												value={this.state.disease_type}
												variant="outline"
												placeholder="Select Type"
											>
												<option disabled hidden value="" />
												{this.state.arr1.map((x, idx) => (
													<option className="font" value={x}>{this.state.arr2[idx]}</option>
												))}
											</Select>
										</InputGroup> */}
										</FormControl>
										<Stack spacing={4}>
											{/* {this.state.arr2.map((x, idx) => (
											<Button
												disabled={!this.state.files}
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
												{x}
											</Button>
										))} */}
											<Button
												disabled={!this.state.files || this.state.apiLoading2 === true}
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
												isLoading={this.state.apiLoading1}
												colorScheme="skin"
												onClick={(e) => this.handleCancerUpload(e)}
											>
												Assess Type of Cancer
											</Button>
											<Button
												disabled={!this.state.files || this.state.apiLoading1 === true}
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
												isLoading={this.state.apiLoading2}
												colorScheme="skin"
												onClick={(e) => this.handleMelanomaUpload(e)}
											>
												Assess Malignancy
											</Button>
										</Stack>
									</Stack>
								) : (
									<Stack spacing={4}>
										{' '}
										<News name={this.state.disease} />
										<Text>Similar Images</Text>
										<Similar />
										<Button colorScheme="skin" onClick={() => this.cleanUp()}>
											Assess Another
										</Button>
									</Stack>
								)}

								{this.state.invalid ? (
									<Alert mt="4" variant="left-accent" status="error">
										<AlertIcon />
										The image is invalid
									</Alert>
								) : null}

								{/* {this.state.disease_type === 'acne' ? this.state.disease ? this.state.disease ===
									'acne' ? (
										<News name="ACNE" />
									) : (
										<News name="No Match" />
									) : null : null}
									{this.state.disease_type === 'cancer' ? null : null}
									{this.state.disease_type === 'melanoma' ? null : null}

									{this.state.disease ? this.state.disease === 'non_acne' ? (
										<Center>
											<HStack>
												<Text fontSize="32px">ACNE</Text>
												<IconContext.Provider value={{ color: '#bc2203', size: '32px' }}>
													<div>
														<BsCheckCircle />
													</div>
												</IconContext.Provider>
											</HStack>
										</Center>
									) : null : (
										<Text color="gray.400" bold>
											click on predict to predict
										</Text>
									)} */}
							</Box>
						</Stack>
					</Flex>
				) : (
					<Flex align={'center'} justify={'center'}>
						<Stack spacing={8} maxW={'lg'} px={6}>
							<Stack align={'center'}>
								<Heading color="white" className="font" fontSize={'4xl'}>
									Welcome Back!
								</Heading>
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
												name="password"
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
