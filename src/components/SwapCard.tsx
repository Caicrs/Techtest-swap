import React from 'react';
import { useAccount, useBalance } from 'wagmi';
import styled from 'styled-components';
import ethereumLogo from './img/ethereum-icon.png'
import uniSwapLogo from './img/uniswap-icon.png'

const SwapCard = () => {

  return (
    <MainContainer>
    <Container>
      <div>
        <CoinBar>
          <div><img style={{width:22}} src={ethereumLogo}></img></div>
          <p>{1}</p>
          </CoinBar>

        <Input
          type="text"
          placeholder="Amount in"
        />
      </div>
      <div>
        <CoinBar>
        <div><img style={{width:24}} src={uniSwapLogo}></img></div>
          <p>{1}</p>
          </CoinBar>
        <Input
          type="text"
          placeholder="Amount out"
          disabled
          value={0}
        />
      </div>
      <Button disabled={false}>
        Swap
      </Button>
    </Container>
    </MainContainer>
  );
};

export default SwapCard;

const MainContainer = styled.div`
width: 100vw;
height:60vh;
display:flex;
justify-content:center;
align-items:center;
`

const Container = styled.div`
width:fit-content;
padding: 28px;
display:flex;
gap:34px;
flex-direction:column;
> div{
  display:flex;
  flex-direction:column;
  gap:12px;
}
`

const Input = styled.input`
border:none;
padding:8px 18px;
border-radius:8px;
background:white;
color:black;
outline:none;
`
const CoinBar = styled.div`
border-radius:8px;
background: white;
display:flex;
justify-content:center;
align-items:center;
padding:4px 12px;
gap:8px;
>div{
  padding: 4px;
  width:fit-content;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
> p {
  border-left: 1px solid rgba(0, 0, 0,0.25);
  padding: 0 8px;
  width:100%;
  display:flex;
  align-items:center;
  font-size:12px;
}
`

export const Button = styled.button`
padding:6px 12px;
background:white;
color:black;
border-radius:8px;
font-size:14px;
cursor:pointer;
transition:0.3s;
border:none;
&:hover{
  background:#920ea1;
  color:white;
}
`