import React from 'react';
import styled, {css} from 'styled-components'

const Cart = ({isCartOpen}) => {
    return (
        <div>
            <CartWrapper isOpen={isCartOpen}>
            </CartWrapper>
            <Overlay onClick ={()=>isCartOpen=false} isOpen={isCartOpen} onClick={()=>isCartOpen=false}></Overlay>
            
        </div>
    )
}
const CartWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: -110%;
  display: flex;
  flex-flow:column nowrap;
  align-items: center;
  gap: 4rem;
  width: 59rem;
  height: 100%;
  padding: 6rem;
  background-color: #fff;
  font-size: 3rem;
  transition: right 0.85s ease-in-out;

  ${({isOpen})=>
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
