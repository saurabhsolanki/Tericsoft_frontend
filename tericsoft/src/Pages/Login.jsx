import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Toast,
    useToast,
    Text,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginApi } from "../Redux/auth/action";
  

  
const date = new Date();
const time = ((date.getHours().toString()).length > 1 ? date.getHours() : "0" + date.getHours()) + ":" + ((date.getMinutes().toString()).length > 1 ? date.getMinutes() : "0" + date.getMinutes());
  const init = {
    email: "",
    password: ""
  };
  
  export default function Login() {
    const [data, setData] = useState(init);
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
      dispatch(LoginApi(data,toast,navigate))
    }
    return (
    <div id="loginPage">

      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"md"}>
            <Text fontSize={"3xl"} bgGradient='linear(to-r, #4683a3, #386982)' bgClip='text'><strong>Login to your account</strong></Text>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange}  placeholder="Enter Your Email"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} placeholder="Enter Your Password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button size='lg' 
            colorScheme='whatsapp'
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=2000"
            }
          />
        </Flex>
      </Stack>

    </div>
    );
  }
  