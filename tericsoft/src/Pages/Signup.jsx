import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    Image,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import axios from 'axios'
  import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupPost } from "../Redux/auth/action";
  
  const initial = {
    name:"",
    email: "",
    password: "",
  };
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState(initial);
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const toast = useToast()
  
    function handleChange(e) {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
        dispatch(signupPost(data,toast,navigate))
    }
  
    return (
      <div id="loginPage">
      <Flex 
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8}  maxW={"lg"} py={12} px={6} w='700px'>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>

              <FormControl id="name" isRequired>
                <FormLabel>Name of User</FormLabel> 
                <Input type="text" name="name" onChange={handleChange} placeholder="Enter Your name" isRequired={true}/>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} placeholder="Enter Your Email" isRequired={true}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input placeholder="Enter Your Password" isRequired={true}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  colorScheme='whatsapp'
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"} >
                  Already a user? <strong><Link to="/login" >Login</Link></strong>
                </Text>
              </Stack>
            </Stack>
          </Box>
          
        </Stack>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=2000"
            }
          />
        </Flex>
      </Flex>

      </div>
    );
  }
  