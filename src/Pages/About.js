import React from 'react';
import styled from 'styled-components';

//about page
const About = () => {
    return (
        <div>
            <StyledP>
                This is Cool Shop. Coolest shop on earth.
                We only sell cool products, no boring thing may 
                ever exist in our shop. 
                <br/>
                <br/>
                And let the adventure begin.
                <StyledImage src="https://i.ibb.co/Jp4Q9DH/Screenshot-from-2021-02-09-17-38-26.png" />
            </StyledP>
        </div>
    )
}
const StyledP = styled.p`
width:100%;
padding:2rem;
font-size:2rem;
font-weight:500;
min-height:70vh;

`
const StyledImage = styled.img`
border-radius:0.6rem;
display:block;
width:90%;
margin:auto;
margin-top:2rem;
`

export default About
