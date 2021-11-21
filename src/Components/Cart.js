import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectBasket, addProduct, removeProduct, emptyBasket } from '../State/BasketSlice';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { ImCross } from "react-icons/im";

const CartProduct = ({ productData }) => {
  const dispatch = useDispatch();
  console.log("productData", productData)
  //Get basket from redux state
  const basket = useSelector(selectBasket);
  const basketProducts = Object.values(basket);
  console.log("basketProducts", basketProducts);
  //Calculate the total price for this product. Since a product's count may be more than 1, we multiply the product's price with the count 
  let totalPrice = (parseFloat(productData.price) * productData.count).toFixed(2);

  const addProductController = () => {
    dispatch(addProduct(productData))
  }
  const removeProductController = () => {
    dispatch(removeProduct(productData))
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  totalPrice = numberWithCommas(totalPrice);
  return (
    <BasketProductWrapper>
      <div>
        {productData.name}
        <ProductPrice>$ {totalPrice}</ProductPrice>
      </div>

      <BasketProductCountWrapper>
        <BasketProductCountController id="minus" onClick={removeProductController}><FaMinus /></BasketProductCountController>
        <BasketProductCount>{productData.count}</BasketProductCount>
        <BasketProductCountController id="plus" onClick={addProductController}><FaPlus /></BasketProductCountController>
      </BasketProductCountWrapper>
    </BasketProductWrapper>
  )

}

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

const Cart = ({ isCartOpen, changeCartStatus }) => {
  console.log("changeCartStatus ", changeCartStatus)
  const basket = useSelector(selectBasket);
  const basketArray = Object.values(basket);
  const dispatch = useDispatch()
  //totalPrice is a utility function
  const totalPrice = (price, count) => {
    return (parseFloat(price) * count);
  }

  //Calculate totalCheckout price for a basket
  let totalCheckout = basketArray.reduce((acc, curr) => {
    return acc + totalPrice(curr.price, curr.count)
  }, 0).toFixed(2);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  totalCheckout = numberWithCommas(totalCheckout);

  return (
    <div>
      <CartWrapper isOpen={isCartOpen}>
        <ProductsInBasket>
          {basketArray.map((product, index) => {
            return (
              <div>
                <CartProduct key={index} productData={product} />
              </div>
            )
          })}

        </ProductsInBasket>
        <ButtonWrapper>
          <StyledButton onClick={() => dispatch(emptyBasket())}> Checkout </StyledButton>
          <StyledButton onClick={() => changeCartStatus()} ><ImCross /> </StyledButton>
        </ButtonWrapper>
        <div>{totalCheckout}</div>
      </CartWrapper>
      <Overlay isOpen={isCartOpen} onClick={() => changeCartStatus()}></Overlay>

    </div>
  )
}
const StyledButton = styled.button`
font-size:1.5rem;
font-weight: 300;
text-align:center;
color:white;
`
const ButtonWrapper = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content: space-evenly;
width:100%;
padding:1rem;
`
const ProductsInBasket = styled.div`
min-height:30rem;
height:40rem;
overflow-y: scroll;
overflow-x: hidden;
margin:0;
padding:1rem;
width:100%;

::-webkit-scrollbar {
  width: 0.5rem;
 
}
::-webkit-scrollbar-track {
  background:inherit; 
}

::-webkit-scrollbar-thumb {
  background: #858181; 
  height:4rem;
  border-radius:0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`;

const CartWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: -110%;
  display: flex;
  flex-flow:column nowrap;
  align-items: center;
  width: 30rem;
  height: 100%;
  background-color: rgb(204, 114, 200);
  font-size: 2rem;
  transition: right 0.85s ease-in-out;

  ${({ isOpen }) =>
    isOpen && css`
  right:0;
  `
  }
  @media (max-width:480px){
      width:100%;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.9;
  transition: left 0.85s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      left: 0;
    `}
`

export default Cart
