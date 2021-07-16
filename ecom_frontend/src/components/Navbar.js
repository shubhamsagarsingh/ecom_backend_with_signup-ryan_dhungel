import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return(
        <NavbarDiv>
            <div className='logo'>
                <NavLink to='/'><img src='./images/logo1.png' alt='' /></NavLink>
            </div>
            <div className='empty' />
            <div className='menu'>
                <div className='menu-container'>
                    <NavLink className='navlink' to='/'>Home</NavLink>
                    <NavLink className='navlink' to='/signin'>Signin</NavLink>
                    <NavLink className='navlink' to='/signup'>Signup</NavLink>
                    <NavLink className='navlink' to='/contact'>Contact</NavLink>
                    <NavLink className='navlink' to='/about'>About</NavLink>
                </div>
            </div>
        </NavbarDiv>
    )
}



export default Navbar



const NavbarDiv = styled.div`
    // border: 1px solid red;
    height: 50px;
    background: rgba(60,60,60,0.9);
    display: flex;
    flex-direction: row;

    .logo{
        // border: 1px solid red;
        flex: 0.5;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    img{
        // border: 1px solid red;
        height: 40px;
        width: 40px;
    }

    .empty{
        // border: 1px solid red;
        flex: 2;
    }

    .menu{
        // border: 1px solid red;
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-container{
        // border: 1px solid red;
    }

    .navlink{
        padding: 20px;
        color: rgba(256,256,256);
        text-decoration: none;
        font-size: 20px;
    }
`;