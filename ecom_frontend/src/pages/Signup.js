import React, {useState} from 'react'
import styled from 'styled-components'
import { API } from '../config'
 


const Signup = () => {
    const[values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const { name, email, password } = values


    const handleChange = (name) => (event) => {
        setValues({...values, error: false, [name]: event.target.value})
    }


    const signup = (user) => {
        // console.log(name, email, password)
        fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err)
        })
    }


    const clickSubmit = (event) => {
        event.preventDefault()
        signup({name, email, password})
    }
    

    return(
        <SignupDiv>
            <div className='center_div'>
                <form>
                    <div className='center_center_div'>                   
                        <label><h1>Signup Form</h1></label>
                        <input onChange={handleChange('name')} type='text' placeholder='Name'/>                       
                        <input onChange={handleChange('email')} type='text' placeholder='Email'/>
                        <input onChange={handleChange('password')} type='password' placeholder='Password'/>
                        <Button onClick={clickSubmit}>Submit</Button>
                    </div>
                </form>
            </div>
        </SignupDiv>
    )
}



export default Signup



const SignupDiv = styled.div`
    height: 94.8vh;
    // background: #badc58;
    background: rgba(0,0,0,0.8);
    color: rgba(256,256,256);
    display: flex;
    justify-content: center;
    align-items: center;

    .center_div{
        // border: 1px solid red;
        background: rgba(100,100,100);
        border-radius: 10px;
        width: 300px;
        height: 450px;
        box-shadow: 2px 10px 12px rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .center_center_div{
        // border: 1px solid red;
        width: 240px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;


const Button = styled.div`
    height: 40px;
    width: 200px;
    margin: 20px;
    border: none;
    border-radius: 5px;
    background: rgba(50,50,150,0.7);
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background: rgba(30,30,130,0.7);
        color: #fff;
        cursor: pointer;
    }
`;