import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { darken, mode, whiten } from '@chakra-ui/theme-tools';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Img,
  Code,
  Grid,
  theme,
  Heading,
  Button,
  Link,
  HStack,
  Circle,
  Container,
  Center,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../src/ColorModeSwitcher';
import { myTheme } from '../src/styles/theme';

// Icons
import ReactIcon from '../src/icons/react/react-original.svg';
import GithubIcon from '../src/icons/github/github-original.svg';
import NodeIcon from '../src/icons/nodejs/nodejs-original.svg';
import NextJSIcon from '../src/icons/nextjs/nextjs-original.svg';
import PythonIcon from '../src/icons/python/python-original.svg';

// Memoji
import LeduxeyeMemoji from '../src/images/eye.png';
import LeduxnotebookMemoji from '../src/images/notebook.png';

const Home: NextPage = () => {
  const [colorBox, setColorBox] = useState('#8257E6');

  return (
    <ChakraProvider theme={myTheme}>
      {/* Header */}
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
        <Box display={'flex'} alignItems="center" justifyContent="center">
          <Link href="https://github.com/luksdev" target="_blank">
            <IconButton aria-label="" bg={'none'}>
              <Image src={GithubIcon} width={25} height={25} />
            </IconButton>
          </Link>
          <Box
            onClick={() => {
              if (colorBox == '#8257E6') {
                setColorBox('#1CA84C');
              } else {
                setColorBox('#8257E6');
              }
            }}
          >
            <ColorModeSwitcher />
          </Box>
        </Box>
      </Box>

      {/* MemojiBox */}
      <VStack>
        <Box
          rounded="full"
          bg={colorBox}
          my={2}
          w={120}
          h={120}
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box paddingRight={2} paddingTop={3}>
            <Image
              src={LeduxeyeMemoji}
              alt="leduxMemoji"
              width={120}
              height={120}
            />
          </Box>
        </Box>
      </VStack>
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

      {/* PrimaryText Home */}
      <Box
        paddingTop="5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        my={5}
      >
        <Heading
          fontSize={{ base: 20, md: 50, lg: 60 }}
          textAlign="center"
          width={{ base: '70%', md: '22ch', lg: '22ch' }}
        >
          Criação de Aplicações Mobile com Agilidade, Segurança e
          Acessibilidade.
        </Heading>
      </Box>

      {/* AboutMe */}
      <VStack
        marginTop={{ base: '45px', md: '70px', lg: '75px' }}
        marginX={'auto'}
        width={'80%'}
      >
        <HStack flexDirection={{ base: 'column', md: 'row', lg: 'row' }}>
          <Box width={{ base: '100%', md: '50%', lg: '50%' }}>
            <Heading
              textAlign={{ base: 'center', md: 'start', lg: 'start' }}
              width="full"
              marginBottom={5}
            >
              Sobre mim
            </Heading>

            <Text textAlign={{ base: 'center', md: 'start', lg: 'start' }}>
              Desenvolvedor à 2 anos, cursando Sistemas de Informação, venho
              aprimorando meus conhecimentos em desenvolvimento front-end,
              focado em Mobile utilizando ReactNative como framework core para
              meus desenvolvimentos. Sempre procurando vencer meus próprios
              medos e buscando cada vez mais ficar atualizado das melhores
              tecnologias do momento.
            </Text>
          </Box>

          <Box
            width={{ base: '100%', md: '50%', lg: '50%' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={LeduxnotebookMemoji}
              alt="leduxMemojiNotebook"
              width={250}
              height={250}
            />
          </Box>
        </HStack>
      </VStack>

      <Center pt={20} pb={10}>
        <VStack>
          <Heading>Habilidades</Heading>
          <HStack pt={5}>
            <Box display={'flex'} flexDir="column" justifyContent="center">
              <IconButton aria-label="" bg={'none'}>
                <Image src={ReactIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                ReactJS
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              px={5}
            >
              <IconButton aria-label="" bg={'none'}>
                <Image src={NodeIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                NodeJS
              </Heading>
            </Box>

            <Box display={'flex'} flexDir="column" justifyContent="center">
              <IconButton aria-label="" bg={'none'}>
                <Image src={NextJSIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                NodeJS
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              px={5}
            >
              <IconButton aria-label="" bg={'none'}>
                <Image src={PythonIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                Python
              </Heading>
            </Box>
          </HStack>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default Home;
