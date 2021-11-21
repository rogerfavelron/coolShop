import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import { FaBars, FaShoppingBag } from 'react-icons/fa'
import { ImCross } from "react-icons/im";
import { Cart } from './Cart'
import { Link } from 'react-router-dom'

const Navbar = () => {
    /*
    isCartOpen state is passed onto Cart component. This state is useful
    because when the value is false, cart's display will be none.
    
    isOnMobile state is used for dropdown menu in smaller screens.
    And also some css is adapted based on screen size, and they got that
    data from isOnMobile.
    */
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isOnMobile, setIsOnMobile] = useState(false);
    const changeCartStatus = () => {
        if (isCartOpen === false) setIsCartOpen(true)
        else setIsCartOpen(false)

    }
    useEffect(() => {
        /*Check the screen size on every render, prevent possible bugs by
        checking the screen size and setting the isOnMobile when necessary.
        */
        function handleResize() {
            if (window.innerWidth >= 800) {
                console.log("now bigger than 800")
                setIsOnMobile(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        //Cleanup the useEffect when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //onMobile function changes the isOnMobile. This data is used in small screen
    //dropdown.
    const onMobile = () => {
        if (isOnMobile) setIsOnMobile(false)
        else setIsOnMobile(true)
        //console.log("changed the mobile now")

    }
    return (
        <>
            <NavbarWrapper>
                <TitleWrapper to="/">Cool Shop</TitleWrapper>
                <LinksWrapper isOnMobile={isOnMobile}>
                    <ListElement to="/electronics">Electronics</ListElement>
                    <ListElement to="/onepiece">One Piece</ListElement>
                    <ListElement to="about">About</ListElement>
                    <ButtonWrapper onClick={changeCartStatus}> <FaShoppingBag /> Cart</ButtonWrapper>
                    <CloseButton onClick={onMobile} isOnMobile={isOnMobile}><ImCross /> </CloseButton>
                </LinksWrapper>
                <BarsWrapper onClick={onMobile}>
                    <FaBars />
                </BarsWrapper>

            </NavbarWrapper>
            <Cart isCartOpen={isCartOpen} changeCartStatus={changeCartStatus} />
        </>
    )
}
const TitleWrapper = styled(Link)`
width:75%;
text-decoration:none;
height:100%;
font-size: 2rem;
font-weight: bolder;
text-align:center;
padding:1rem;
color:black;
@media only screen and (min-width:800px){
width:40%;
display: flex;
justify-content: center;
align-items: center;
}

`
const NavbarWrapper = styled.div`
border: 10px solid;
border-image-slice: 1;
border-width: 0.4rem;
border-image-source: linear-gradient(to left, #743ad5, #d53a9d);

height:5rem;
display: flex;
flex-flow:row nowrap;
justify-content: space-evenly;
align-items: center;
background-color:rgb(222,222,222);
//background-color: rgb(204, 114, 200);
@media only screen and (min-width:800px){
height:7rem;
}
`;
const LinksWrapper = styled.div`
display:none;
width:50%;
${({ isOnMobile }) =>
        isOnMobile && css`
position: absolute;
display: flex;
background-color: rgb(235, 231, 227);
right:0;
top:5rem;
z-index:1;
flex-flow:column nowrap;
justify-content: space-evenly;
height:30rem;
border:4px solid black;
@media only screen and (max-width:500px){
    width:100%;
}
`
    }
 ${({ isOnMobile }) =>
        !isOnMobile && css`
@media only screen and (min-width:800px){
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-evenly;

}
`}
`
const ListElement = styled(Link)`
list-style: none;
text-decoration:none;
font-size:1.25rem;
font-weight: 400;
padding:0.25rem;
color:black;
@media only screen and (max-width:800px){
border:3px solid rgb(88, 88, 88);
padding:1rem;
text-align:center;
margin-left:3rem;
margin-right:3rem;
border-radius: 10px;
}

`
const BarsWrapper = styled.button`
width:10%;
text-align: center;
font-size: 1.35rem;
@media only screen and (min-width:800px){
    display:none;
}

`
const ButtonWrapper = styled.button`
font-size:1.5rem;
font-weight: 300;
`
const CloseButton = styled(ButtonWrapper)`
display:none;
${({ isOnMobile }) =>
        isOnMobile && css`
display:block;
text-align:center;
`}

`

export default Navbar;
