import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'


export const HomeContentOnePiece = () => {
    return (
        <HomeContentWrapper>
            <StyledTitle>
                "I'm gonna be the king of the pirates."
            </StyledTitle>
            <StyledImage src="https://i.ibb.co/Z2DV2MT/luffy.png" />
            <StyledLinkWrapper>
                <StyledLink to="/onepiece">View cool one piece posters</StyledLink>
            </StyledLinkWrapper>
        </HomeContentWrapper>
    )
}


const HomeContentWrapper = styled.div`
border:3px solid rgb(63, 63, 63);
width:100%;
//max-height:30rem;
border-radius:1rem;
padding:1rem;
margin-top:1.5rem;
@media only screen and (min-width:800px){
    width:80%;
    margin-left:10%;
    margin-top:2.5rem;
}
@media only screen and (min-width:1200px){
    width:60%;
    margin-left:20%;
    margin-top:4rem;
}
`
const StyledImage = styled.img`
width:100%;
display:flex;
flex-grow:1;
//max-height:20rem;
object-fit: contain;
margin:auto;
display: block;

`
const StyledTitle=styled.div`
background-image: linear-gradient(to right,#2ea0b1,#7d4df2); 
color:white;
font-size:2.5rem;
padding:1.5rem;
`
const StyledLinkWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const StyledLink = styled(Link)`
padding:1rem;
font-size:1.1rem;
font-weight:600;
text-decoration:none;
display: flex;
align-items:center;
background:-webkit-linear-gradient(45deg,#2ea0b1 20%,#7d4df2 80%);
background-clip:text;
-webkit-text-fill-color: transparent;
`
export const HomeContentElectronics = () =>{
    return (
        <HomeContentWrapper>
            <ElectroStyledTitle>
                Only. Cool. Electronics.
            </ElectroStyledTitle>
            <StyledImage src="https://i.ibb.co/2jc5PC2/macintosh.png" />
            <StyledLinkWrapper>
                <ElectroStyledLink to="/electronics">View cool electronics</ElectroStyledLink>
            </StyledLinkWrapper>
        </HomeContentWrapper>
    )
}

const ElectroStyledTitle = styled(StyledTitle)`
font-family:'Press Start 2P',cursive;
font-size:1.25rem;
text-align:center;
background-image: linear-gradient(to right,#202829,#d4d3d9); 
`
const ElectroStyledLink = styled(StyledLink)`
background:-webkit-linear-gradient(45deg,#202829 20%,#a8a8a8 80%);
background-clip:text;
-webkit-text-fill-color: transparent;
`