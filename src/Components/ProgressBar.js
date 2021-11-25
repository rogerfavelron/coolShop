import React from 'react';
import styled, {keyframes} from 'styled-components';

const ProgressBar = () => {
    return (
        <ProgressBarWrapper>
            <ProgressBarText>
                Data is loading ...
            </ProgressBarText>
        <ProgressBarImage src="https://i.ibb.co/60JfMFf/chopper.png" />
        </ProgressBarWrapper>
    )
}

const ProgressBarText = styled.div`
font-size:1.5rem;
padding:1rem;
`
const imageKeyframes = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg)
}

`
const ProgressBarImage = styled.img`
width:9rem;
height:9rem;
object-fit:cover;
border-radius: 50%;

animation:${imageKeyframes} 3.25s linear infinite;

`
const ProgressBarWrapper = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content: center;
align-items:center;
min-height:60vh;
`

export default ProgressBar;
