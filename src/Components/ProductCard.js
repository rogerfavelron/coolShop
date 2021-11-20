import React from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import { selectBasket,addProduct } from '../State/BasketSlice';

const ProductCard = ({name, price, imageUrl}) => {

    const basket = useSelector(selectBasket);
    const dispatch = useDispatch();
    const productData = {
        name,price,imageUrl
    }
    const addProductHandler = () =>{
        dispatch(addProduct(productData));
        console.log(basket);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      price = numberWithCommas(price);
    return (
        <ProductCardWrapper>
            <ImageWrapper>
                <StyledImage src={imageUrl} />
            </ImageWrapper>
            <ProductDetails>
                <ProductName>{name}</ProductName>
                <ProductPrice>${price}</ProductPrice>
            </ProductDetails>
            <StyledButton onClick={addProductHandler}>Add to the cart</StyledButton>
        </ProductCardWrapper>
    )
}

const ProductCardWrapper = styled.div`
width:22.5rem;
margin:auto;
display:flex;
flex-flow:column nowrap;
align-items: center;
padding:0.5rem;
border:3px solid pink;
border-radius:1rem;
height:25rem;
margin:1rem;
`
const ImageWrapper = styled.div`
width:100%;
padding:0.25rem;
display: flex;
flex-flow:column nowrap;
height:16rem;
`
const StyledImage = styled.img`
width:100%;
height:100%;
object-fit: contain;
`
const ProductDetails = styled.div`
padding:0.5rem;
height:7rem
`
const ProductName = styled.div`
padding:0.5rem;
font-size:1.5rem;
font-weight:700;
text-align:center;
color:black;

`
const ProductPrice = styled.div`
padding:0.5rem;
font-size: 1rem;
text-align:center;
color:black;
`
const StyledButton = styled.button`
padding:0.5rem;
border-radius: 0.25rem;
margin-right:2rem;
margin-left:2rem;
color:white;
background-color: rgb(204, 114, 200);
font-weight: 600;
font-size:1.125rem;
height:2.5rem;

`
export default ProductCard;
