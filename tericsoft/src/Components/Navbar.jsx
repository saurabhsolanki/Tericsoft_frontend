import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Name = useSelector((store) => store.auth.username);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} p={3}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         <Flex gap='20'minWidth='max-content' p={15} alignItems={'center'}>
           {/* <Link to="/"><Box as='button' borderRadius='md' bg='#48bb78' color={'white'} px={6} h={9}> Home Page </Box></Link>  */}
           <Link to="/"><img src="https://www.towngatepractice.net/wp-content/uploads/sites/508/2022/05/BMI-CALCULATOR.png" alt="" width='80px' /></Link> 
           <Link to="/login"><Box as='button' borderRadius='md' bg='#48bb78' color={'white'} px={6} h={9}> Login Page </Box></Link> 
           <Link to="/signup"><Box as='button' borderRadius='md' bg='#48bb78' color={'white'} px={6} h={9}> Signup Page </Box></Link> 
           <Link to="/bmi"><Box as='button' borderRadius='md' bg='#48bb78' color={'white'} px={6} h={9}> BMI Page </Box></Link> 
         </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>

                  <br />
                  <Center>
                    <Text as='b' fontSize='2xl'>{Name?Name:"user"}</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}