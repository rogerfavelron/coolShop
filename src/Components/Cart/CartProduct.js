import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../State/BasketSlice';
import { FaMinus, FaPlus } from 'react-icons/fa';

//CartProduct is the component we use to represent each product in cart. 
const CartProduct = ({ productData }) => {
  const dispatch = useDispatch();
  //Calculate the total price for this product. Since a product's count may be more than 1, we multiply the product's price with the count 
  let totalPrice = (parseFloat(productData.price) * productData.count).toFixed(2);

  const addProductController = () => {
    dispatch(addProduct(productData))
  }
  const removeProductController = () => {
    dispatch(removeProduct(productData))
  }

  //numberWithCommas is a utility function to represent big numbers with commas between them.
  //Here is the source: https://stackoverflow.com/a/2901298
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  //totalPrice is the string with commas 
  totalPrice = numberWithCommas(totalPrice);
  return (
    <BasketProductWrapper>
      <div>
        {productData.name}
        <ProductPrice>$ {totalPrice}</ProductPrice>
      </div>

      <BasketProductCountWrapper>
        <BasketProductCountController id="minus" data-testid="minusButton" onClick={removeProductController}><FaMinus /></BasketProductCountController>
        <BasketProductCount>{productData.count}</BasketProductCount>
        <BasketProductCountController id="plus" data-testid="plusButton" onClick={addProductController}><FaPlus /></BasketProductCountController>
      </BasketProductCountWrapper>
    </BasketProductWrapper>
  )

}
/*
For styling, i used styled-components. Wrapped basket product, put the name and price inside a div,
and created a count wrapper for manipulating the count of the product.

*/


const ProductPrice = styled.div`
color:black;
font-size: 1rem;
`;

const BasketProductCountController = styled.button`
width:2rem;
height:2rem;
color:black;

`;
const BasketProductCount = styled.div`
background-color:black;
text-align:center;
color:white;
font-size: large;
padding:0.25rem;
min-width:2rem;
/*max-width:4rem is here for numbers like 500,1000 */
max-width:4rem;
height:2rem;
`;

const BasketProductCountWrapper = styled.div`
display:flex;
justify-content: space-evenly;
flex-flow:row nowrap;
align-items:center;
width:40%;
flex-flow:row nowrap;
`;

const BasketProductWrapper = styled.div`
display:flex;
flex-flow:row nowrap;
border:0.25rem solid pink;
justify-content: space-evenly;
border-radius: 0.5rem;;
padding:1rem;
width:100%;
margin:1rem 0 1rem 0;
`;

//export the CartProduct component to use it inside Cart component.
export default CartProduct;