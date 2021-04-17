import React from 'react'
import { Center, HStack, Text } from "@chakra-ui/react";
import {BsCheckCircle} from "react-icons/bs";
import {IconContext} from "react-icons";
function News(props) {
    return (
        <Center>
        <HStack>
            <Text textTransform="uppercase" fontWeight="bold" fontSize="1.2em">{props.name}</Text>
            <IconContext.Provider value={{ color: 'green', size: '32px' }}>
                <div>
                    <BsCheckCircle />
                </div>
            </IconContext.Provider>
        </HStack>
    </Center>
    )
}

export default News
