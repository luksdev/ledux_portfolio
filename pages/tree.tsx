import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    ChakraProvider,
    Box,
    Text,
    VStack,
    Heading,
    Link,
    HStack,
    Center,
    IconButton,
    Button,
    Icon,
} from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../src/ColorModeSwitcher';
import { myTheme } from '../src/styles/theme';
import { NextPage } from 'next';

import fotoPerfil from '../public/perfil.png';
import { FaArrowCircleLeft, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Tree: NextPage = () => {
    return (
        <ChakraProvider theme={myTheme}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
                fontSize="20px"
                fontWeight={'bold'}
                my="0"
                mx="auto"
                p={'2'}
                width={'80%'}
            >
                <Link href='/'>
                    <Button>
                        <Icon as={FaArrowCircleLeft} size={'20px'} />
                    </Button>
                </Link>
                <ColorModeSwitcher />
            </Box>

            <Box display={"flex"} alignItems="center" justifyContent={"center"} flexDir="column">
                <Box border={"1px solid"} borderColor={"red.500"} borderRadius="50%" padding={1} borderBottomStyle="dashed" display="flex"
                    alignItems={"center"} justifyContent={"center"}>
                    <Image src={fotoPerfil} width={200} height={200} className="rounded-image" />
                </Box>

                <Text my={10} fontWeight="semibold">Software enginner</Text>

                <Box display={"flex"} gap={5} flexWrap="wrap" alignItems={"center"} justifyContent="center">
                    <Link target={"_blank"} href='https://www.linkedin.com/in/lucaseduardo-dev/'>
                        <Button padding={10} width="60">
                            <Box display={"flex"} alignItems={"center"} justifyContent="space-between" width={"full"}>
                                <Text>Linkedin</Text>
                                <FaLinkedin size={30} />
                            </Box>
                        </Button>
                    </Link>
                    
                    <Link target={"_blank"} href='https://github.com/luksdev'>
                        <Button padding={10} width="60">
                            <Box display={"flex"} alignItems={"center"} justifyContent="space-between" width={"full"}>
                                <Text>Github</Text>
                                <FaGithub size={30} />
                            </Box>
                        </Button>
                    </Link>
                </Box>
            </Box>

        </ChakraProvider>
    )
}

export default Tree;