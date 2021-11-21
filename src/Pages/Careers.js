import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <div>
            <StyledP>
                Career at Cool Shop is everybody's dream . 
                Current open positions are listed below:
                <br/>
                <br/> 
                <StyledPosition>
                    <StyledPositionTitle>
                        Database Administrator
                    </StyledPositionTitle>
                     I need a person who can improve our database. For example,
                     adding more one piece crews, improving existing crews 
                     or imroving electronics. The person should know how to 
                     use Github, how to publish an image on various image websites 
                     (imgur,imgbb etc). And that's all :)
                     <br/>
                     <br/>
                     You can find my mail address in my github.

                </StyledPosition>
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
const StyledPosition= styled.div`
background-color: rgb(222,222,222);
border-radius: 0.5rem;
padding:1rem;
`
const StyledPositionTitle= styled.div`
background-color: rgb(222,222,222);
border-radius: 0.5rem;
padding:0.5rem;
font-size:1.5rem;
font-weight: 600;
color:purple;
`
export default About
