import React from 'react';
import { chainId, useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import styled from 'styled-components'

const Header = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: chainId.goerli,
  });
  const { address } = useAccount();

  return (
    <HeaderComponent>
      {/* CONDITIONAL RENDER FOR (ADDRESS) AND (CONNECT WALLET) */}
      {address ? (
        <AddressComponent>Connected: {address}</AddressComponent>
      ) : (
        <Button onClick={() => connect()}>Connect wallet</Button>
      )}
    </HeaderComponent>
  );
};

export default Header;

export const AddressComponent = styled.p`
color:white;
`

export const HeaderComponent = styled.header`
width:100vw;
display:flex;
justify-content:center;
padding:24px 0;
`

export const Button = styled.div`
padding:6px 12px;
background:white;
color:black;
border-radius:8px;
font-size:14px;
cursor:pointer;
transition:0.3s;
&:hover{
  background:#920ea1;
  color:white;
}
`