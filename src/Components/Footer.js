import React from 'react';
import styled from 'styled-components'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

//Footer component includes some links.
const Footer = () => {
    return (
        <div>
            <FooterWrapper>
                This shop only sells cool products.
            <LinksWrapper>
            <GithubLink href='https://github.com/rogerfavelron'><FaGithub/></GithubLink>
            <LinkWrapper to="coolShop/careers">Careers</LinkWrapper>
            <LinkWrapper to="coolShop/about">About</LinkWrapper>
            </LinksWrapper>
            </FooterWrapper>
        </div>
    )
}

const FooterWrapper = styled.div`
padding:1rem;
background-color: #303030;
margin-top:1rem;
min-height:4rem;
border-radius:0.25rem;
color:white;
text-align:center;

`
const LinksWrapper = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
`
const LinkWrapper = styled(Link)`
padding:1rem;
margin:0.5rem;
border:3px solid pink;
border-radius: 0.25rem;
text-decoration: none;
color:white;
font-size:1.5rem;
`
const GithubLink = styled.a`
padding:1rem;
margin:0.5rem;
border:3px solid pink;
border-radius: 0.25rem;
text-decoration: none;
color:white;
font-size:1.5rem;
`
export default Footer
