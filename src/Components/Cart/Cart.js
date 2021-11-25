import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectBasket, emptyBasket } from '../../State/BasketSlice';
import { ImCross } from "react-icons/im";
import CartProduct from './CartProduct';

/*We access our cart from navbar, so we get isCartOpen boolean and changeCartStatus function as our props.
These props are passed by the Navbar component which uses a bars/dropdown style for smaller screens.

As for the Cart component, we have a little animation and also an overlay at the left. When the cart is open, 
there's a black (not fully opaque) overlay at the left and the overlay closes the cart when clicked on.

*/
const Cart = ({ isCartOpen, changeCartStatus }) => {
  // console.log("changeCartStatus ", changeCartStatus)
  const basket = useSelector(selectBasket);
  const basketArray = Object.values(basket);
  const dispatch = useDispatch()
  //get basket, basketArray and dispatch 

  //totalPrice is a utility function
  const totalPrice = (price, count) => {
    return (parseFloat(price) * count);
  }

  //Calculate totalCheckout price for a basket
  let totalCheckout = basketArray.reduce((acc, curr) => {
    return acc + totalPrice(curr.price, curr.count)
  }, 0).toFixed(2);

  //numberWithCommas is a utility function to represent big numbers with commas between them.
  //Here is the source: https://stackoverflow.com/a/2901298
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  totalCheckout = numberWithCommas(totalCheckout);

  return (
    <div>
      {/*
      Pass the isCartOpen boolean as a prop. We'll display:none when the cart is not open.
      */}
      <CartWrapper className="holyPink" isOpen={isCartOpen}>
        <ProductsInBasket>
          {basketArray.map((product, index) => {
            return (
              <div>
                <CartProduct key={index} productData={product} dispatch={dispatch}/>
              </div>
            )
          })}

        </ProductsInBasket> 
        <ButtonWrapper>
          {/*
          Empty basket simply empties the basket in redux store.
          changeCartStatus updates the isCartOpen data (this data is a state in Navbar) . changeCartStatus is 
          a function in Navbar and it updates the state.
          */}
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
/*
The cart is normally not visible (because of right:-100%). It has a fixed position.
When isOpen prop is true, we set right:0 and now the cart is visible and has a z-index:1 , it's on top of the ui.
*/
  position: fixed;
  z-index: 1;
  top: 0;
  right: -100%;
  display: flex;
  flex-flow:column nowrap;
  align-items: center;
  width: 30rem;
  height: 100%;
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
  /*
  Similar to CartWrapper, this has fixed positioning and also when the cart is open, overlay covers all 
  of the left part. When the user doesn't click to the Cart's internal exit button, they can easily click 
  overlay to close the cart.
  */
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
