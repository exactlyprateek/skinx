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
	Center,
	SimpleGrid,
	HStack,
	SkeletonText,
	VStack
} from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';
import { useState } from 'react';
import { Redirect } from 'react-router';
import BrowseButton from './BrowseButton';
import ShowImage from './ShowImage';

function Classify() {
	const [ file1, setFile1 ] = useState();
	const [ file2, setFile2 ] = useState();
	const [ fileName1, setFileName1 ] = useState(null);
	const [ fileName2, setFileName2 ] = useState(null);
	const [ fileName3, setFileName3 ] = useState(null);
	const [ fileName4, setFileName4 ] = useState(null);
	const [ imgUrl1, setImgUrl1 ] = useState(null);
	const [ imgUrl2, setImgUrl2 ] = useState(null);
	const [ imgUrl3, setImgUrl3 ] = useState(null);
	const [ imgUrl4, setImgUrl4 ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ fileInvalid, setFileInvalid ] = useState(true);
	const [ result, setResult ] = useState(null);
	const handleFile1 = (event) => {
		if (event.target.files[0]) {
			console.log(event.target.files[0]);
			setFile1(event.target.files[0]);
			setFileName1(event.target.files[0].name);
			setImgUrl1(URL.createObjectURL(event.target.files[0]));
			setFileInvalid(false);
		}
	};
	const handleFile2 = (event) => {
		if (event.target.files[0]) {
			console.log(event.target.files[0]);
			setFile2(event.target.files[0]);
			setFileName2(event.target.files[0].name);
			setImgUrl2(URL.createObjectURL(event.target.files[0]));
			setFileInvalid(false);
		}
	};
	const handleAssessment = (event) => {
		setLoading(true);
		setResult([
			{
				Image_0: '16.95',
				Image_1: '22.34'
			},
			{
				difference_0_and_1: '-5.39'
			},
			{
				masked_imgpath: 'https://via.placeholder.com/400?text=masked_img',
				clustered_imgpath: [
					'https://via.placeholder.com/400?text=clustered_img1',
					'https://via.placeholder.com/400?text=clustered_img2'
				]
			}
		]);
		if (result) {
			setFileName3('Image 0' + result[0].Image_0);
			setFileName4('Image 1' + result[0].Image_1);
		}
	};
	if (!localStorage.getItem('token')) {
		return <Redirect to="/" />;
	}
	return (
		<Box>
			<Center spacing={2}>
				<Box
					boxShadow="md"
					rounded="md"
					background="white"
					mt="2rem"
					p="1.8rem"
					maxH={[ '180vh', '160vh', '140vh', '80vh' ]}
					w={[ '100vw', '100vw', '50vw', '70vw' ]}
				>
					<FormControl id="email">
						<Text fontSize="2xl">Select the image files (.jpg, .png)</Text>
						<InputGroup my="4">
							<Input
								display="none"
								p="1.5"
								accept="image/*"
								type="file"
								onChange={handleFile1}
								ref={(fileInput1) => setFile1(fileInput1)}
							/>
							<Input
								display="none"
								p="1.5"
								accept="image/*"
								type="file"
								onChange={handleFile2}
								ref={(fileInput2) => setFile2(fileInput2)}
							/>
						</InputGroup>
						{/* <InputGroup my="4">
							{fileName1?<Text mx="2" noOfLines="1" isTruncated>
								{fileName1}
							</Text>: "Select an Image"}
						</InputGroup> */}
						<SimpleGrid minChildWidth="400px">
							<HStack>
								<SimpleGrid>
									{fileName1 ? (
										<Text mx="2" noOfLines="1" isTruncated>
											{fileName1}
										</Text>
									) : (
										''
									)}
									{imgUrl1 ? (
										<ShowImage func={() => file1.click()} url={imgUrl1} />
									) : (
										<BrowseButton func={() => file1.click()} />
									)}
									{fileName2 ? (
										<Text mx="2" noOfLines="1" isTruncated>
											{fileName2}
										</Text>
									) : (
										''
									)}
									{imgUrl2 ? (
										<ShowImage url={imgUrl2} func={() => file2.click()} />
									) : (
										<BrowseButton func={() => file2.click()} />
									)}
								</SimpleGrid>
								<SimpleGrid>
									{!loading ? (
										<Text mx="2" noOfLines="1" isTruncated>
											{fileName3}
										</Text>
									) : (
										<SkeletonText mx="2" mt="4" noOfLines={1} isTruncated />
									)}
									{imgUrl3 ? (
										<ShowImage url={imgUrl3} func={() => file1.click()} />
									) : (
										<div>{loading ? <Skeleton minH="25vh" m="0.5rem" width="25vh" /> : null}</div>
									)}
									{!loading ? (
										<Text mx="2" noOfLines="1" isTruncated>
											{fileName4}
										</Text>
									) : (
										<SkeletonText mx="2" mt="4" noOfLines={1} isTruncated />
									)}

									{imgUrl4 ? (
										<ShowImage url={imgUrl4} func={() => file2.click()} />
									) : (
										<div>{loading ? <Skeleton minH="25vh" m="0.5rem" width="25vh" /> : null}</div>
									)}
								</SimpleGrid>
							</HStack>
							{result ? (
								<VStack>
									<Text />
									<Text>Image 0 {result[0].Image_0}</Text>
								</VStack>
							) : null}
						</SimpleGrid>

						{/* <Input type="email" /> */}
					</FormControl>

					<Button
						mt="1rem"
						disabled={!imgUrl2 || !imgUrl1 || loading}
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
						isLoading={loading}
						colorScheme="blue"
						onClick={handleAssessment}
					>
						Run Assessment
					</Button>
				</Box>
			</Center>
		</Box>
	);
}

export default Classify;
