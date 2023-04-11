import { Button, Input, InputGroup, InputLeftAddon, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToMyBmiItems, getBmiItems } from '../Redux/Bmi/bmi.actions';
import { logout } from '../Redux/auth/action';
import axios from 'axios';


const init = {
    height: "",
    weight: ""
  };
const BMIPage = () => {
      // state
      const token = useSelector((store) => store.auth.token);
      const data=useSelector((store)=>store.bmi.data)
      const [weight, setWeight] = useState(0)
      const [height, setHeight] = useState(0)
      const dispatch=useDispatch()
      const [bmi, setBmi] = useState('')
      const toast = useToast()


      let calcBmi = (event) => {
        //prevent submitting
        event.preventDefault()
        if (+weight === 0 || +height === 0) {
          alert('Please enter a valid weight and height')
        } else {
          let bmi = (+weight / ((+height) * (+height)))
          setBmi(bmi)
         dispatch(addItemToMyBmiItems(token,weight,height,bmi))
        }
      }
    

      const logoutButton=()=>{
        dispatch(logout())
      }

      const deleteBmi=async(id)=>{
        if(window.confirm("Are you sure that you want to Delete that Data ?")){
            await axios.delete(`https://tericsoft-t4ub.onrender.com/bmi/${id}`).then((res)=>{
                toast({
                    position: 'top',
                    title: `${res.data.message}`,
                    status: 'info',
                    duration: 2000,
                    isClosable: true,
                  })
                dispatch(getBmiItems(token))
              }).catch((er)=>{
                console.log(er)
              })
          }
      }

      useEffect(()=>{
        dispatch(getBmiItems(token))
      },[token])

  return (
    <div>
         <div id='logoutbutton'> <Button colorScheme='red' size='lg' onClick={logoutButton}>Logout</Button></div>

    <div id='bmimainDiv' >
      
       <div id='bmidiv'>
        <Text fontSize='2xl'>BMI Calculator</Text>
        <form onSubmit={calcBmi}>
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftAddon children='Weight (kg)' />
                <Input type='text' placeholder='Enter Your Weight' onChange={(e) => setWeight(e.target.value)}/>
            </InputGroup>

            <InputGroup >
                <InputLeftAddon children='Height (m)' />
                <Input type='text' placeholder='Enter Your Height' onChange={(event) => setHeight(event.target.value)}/>
            </InputGroup>
            </Stack>
          <div>
            <Button  type='submit' colorScheme='blue'>Submit</Button>
          </div>
        </form>

        <div >
          <h3>Your BMI is: {bmi}</h3>
        </div>

       
      </div>
      <br />
      <hr />

      <div id="bmiListDiv">
        <Text as='b' fontSize='2xl'>Your BMI History</Text>
      <TableContainer id="taskTable">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>S.NO</Th>
              <Th>Height</Th>
              <Th>Weight</Th>
              <Th>BMI Score</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((e, i) => (
              <Tr key={i}>
                <Td>
                  <Text fontSize={"lg"}>{i+1}</Text>
                </Td>
                <Td>
                  <Text fontSize={"lg"}>{e.height}</Text>
                </Td>
                <Td>
                  <Text fontSize={"lg"}>{e.weight}</Text>
                </Td>
                <Td>
                  <Text fontSize={"lg"}>{(e.bmi)}</Text>
                </Td>
                <Td>
                  <Button colorScheme='red' onClick={()=>deleteBmi(e._id)}>Delete</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      </div>
    </div>


    </div>
  )
}

export default BMIPage
