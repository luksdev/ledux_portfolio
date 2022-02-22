import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { darken, mode, whiten } from '@chakra-ui/theme-tools';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Img,
    Code,
    Grid,
    theme,
    Heading,
    Button,
    HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../src/ColorModeSwitcher';
import { myTheme } from '../src/styles/theme';

import LeduxeyeMemoji from '../src/images/eye.png';
import LeduxnotebookMemoji from '../src/images/notebook.png';

const Home: NextPage = () => {
    return (
        <ChakraProvider theme={myTheme}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
                fontSize="20px"
                fontWeight={'bold'}
                w={'80%'}
                my="0"
                mx="auto"
                p={'2'}
            >
                <Heading fontSize={'24px'} variant="primary">
                    Ledux
                </Heading>
                <ColorModeSwitcher />
            </Box>

            <VStack>
                <Box
                    rounded="full"
                    bg={'primary'}
                    my={0}
                    w={120}
                    h={120}
                    mx="auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box paddingRight={2} paddingTop={3}>
                        <Image src={LeduxeyeMemoji} alt="leduxMemoji" width={120} height={120} />
                    </Box>
                </Box>
                <Box>
                    <Heading
                        fontWeight={'bold'}
                        fontSize={25}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        Oi, eu sou o
                        <Heading
                            variant="primary"
                            fontSize={26}
                            marginLeft="1"
                            fontWeight={'bold'}
                            display="flex"
                            alignItems={'center'}
                            justifyContent="center"
                        >
                            Ledux 🤙
                        </Heading>
                    </Heading>
                </Box>
                <Box paddingTop="5" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                    <Heading>
                        Desenvolvedor Mobile
                    </Heading>
                    <Text>React Native</Text>
                </Box>

                <VStack marginTop="10" width={"80%"}>
                    <HStack flexDirection={{base: 'column', md: 'row', lg: 'row'}}>
                        <Box width={{base: '100%', md: "50%", lg: "50%"}} >
                            <Heading textAlign={{base: 'center', md: 'start', lg: "start"}} width="full" marginBottom={5}>
                                Sobre mim
                            </Heading>

                            <Text textAlign={{base: 'center', md: 'start', lg: 'start'}}>Desenvolvedor à 2 anos, cursando Sistemas de Informação, venho aprimorando meus conhecimentos em desenvolvimento front-end, focado em Mobile utilizando ReactNative como framework core para meus desenvolvimentos. </Text>

                        </Box>

                        <Box width={{base: '100%', md: "50%", lg: "50%"}} display="flex" alignItems="center" justifyContent="center">
                            <Image src={LeduxnotebookMemoji} alt="leduxMemojiNotebook" width={250} height={250}/>
                        </Box>
                    </HStack>
                </VStack>
            </VStack>
        </ChakraProvider>
    );
};

export default Home;
