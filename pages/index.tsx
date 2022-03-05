import type { NextPage } from 'next';
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
} from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../src/ColorModeSwitcher';
import { myTheme } from '../src/styles/theme';

// Icons
import cIcon from '../src/icons/c/c-original.svg';
import HtmlIcon from '../src/icons/html5/html5-original.svg';
import CssIcon from '../src/icons/css3/css3-original.svg';
import JavaScriptIcon from '../src/icons/javascript/javascript-original.svg';
import ReactIcon from '../src/icons/react/react-original.svg';
import GithubIcon from '../src/icons/github/github-original.svg';
import NodeIcon from '../src/icons/nodejs/nodejs-original.svg';
import NextJSIcon from '../src/icons/nextjs/nextjs-original.svg';
import ExpressIcon from '../src/icons/express/express-original.svg';
import PythonIcon from '../src/icons/python/python-original.svg';
import LinkedinIcon from '../src/icons/linkedin/linkedin-original.svg';

// Memoji
import LeduxeyeMemoji from '../src/images/eye.png';
import LeduxnotebookMemoji from '../src/images/notebook.png';

const Home: NextPage = () => {
  const [colorBox, setColorBox] = useState('#8257E6');
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ChakraProvider theme={myTheme}>
      {/* Button-ScrollToTop */}
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          aria-label="button-to-top"
          position="fixed"
          bottom="20px"
          right={['16px', '30px']}
          zIndex={1}
        >
          <ArrowUpIcon />
        </IconButton>
      )}

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
          <Link
            href="https://www.linkedin.com/in/lucaseduardo-dev/"
            target="_blank"
          >
            <IconButton aria-label="" bg={'none'}>
              <Image src={LinkedinIcon} width={25} height={25} />
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
          Criação de Aplicações Web/Mobile com Agilidade, Segurança e
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
        <VStack w={'full'}>
          <Heading>Habilidades</Heading>
          <Box
            pt={5}
            display="flex"
            alignItems="center"
            justifyContent={{ base: 'space-around', md: 'space-around' }}
            flexWrap="wrap"
            w={{ base: '85%', md: '50%' }}
          >
            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={HtmlIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                HTML5
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={CssIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                CSS3
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={JavaScriptIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                JavaScript
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
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
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={ReactIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                RNative
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={NodeIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                NodeJS
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={ExpressIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                Express
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={NextJSIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                NextJS
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={PythonIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                Python
              </Heading>
            </Box>

            <Box
              display={'flex'}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="" bg={'none'} w={35}>
                <Image src={cIcon} width={35} height={35} />
              </IconButton>
              <Heading fontSize={'13px'} pt={1}>
                C
              </Heading>
            </Box>
          </Box>
        </VStack>
      </Center>

      <Center pt={10} mb={300}>
        <Heading>O que eu faço?</Heading>
      </Center>
    </ChakraProvider>
  );
};

export default Home;
