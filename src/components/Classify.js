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
    SkeletonText
} from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';
import { useState } from 'react';
import { Redirect } from 'react-router';
import ShowImage from './ShowImage';

function Classify() {
	const [ file1, setFile1 ] = useState();
	const [ file2, setFile2 ] = useState();
	const [ fileName1, setFileName1 ] = useState(null);
	const [ fileName2, setFileName2 ] = useState(null);
	const [ imgUrl1, setImgUrl1 ] = useState(null);
	const [ imgUrl2, setImgUrl2 ] = useState(null);
    const [ imgUrl3, setImgUrl3 ] = useState(null);
    const [ imgUrl4, setImgUrl4 ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ fileInvalid, setFileInvalid ] = useState(false);
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
        
        
    }
    if(!localStorage.getItem('token')){
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
						<Text>Select the image files (.jpg, .png)</Text>
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
									<Button h="25vh" m="0.5rem" width="25vh" onClick={() => file1.click()}>
										Browse
									</Button>
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
									<Button h="25vh" m="0.5rem" width="25vh" onClick={() => file2.click()}>
										Browse
									</Button>
								)}
							</SimpleGrid>
							<SimpleGrid>
								{!loading ? (
									<Text mx="2" noOfLines="1" isTruncated>
										{fileName1}
									</Text>
								) :<SkeletonText mx="2" mt="4" noOfLines={1} isTruncated />}
								{imgUrl3 ? (
									<ShowImage func={() => file1.click()} url={imgUrl1} />
								) : (
									 <div>
                                         {loading?<Skeleton minH="25vh" m="0.5rem" width="25vh" />:null}
                                    </div>
								)}
								{!loading ? (
									<Text mx="2" noOfLines="1" isTruncated>
										{fileName2}
									</Text>
								) : <SkeletonText mx="2" mt="4" noOfLines={1} isTruncated />}
                               
								{imgUrl4 ? (
									<ShowImage url={imgUrl2} func={() => file2.click()} />
								) : (
                                    <div>
                                         {loading?<Skeleton minH="25vh" m="0.5rem" width="25vh" />:null}
                                    </div>
								)}
							</SimpleGrid>
						</HStack>

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
						Run A
					</Button>
				</Box>
			</Center>
		</Box>
	);
}

export default Classify;
