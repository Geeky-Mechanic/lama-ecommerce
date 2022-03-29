import React from 'react';
import styled from 'styled-components';
/* ---->  Responsiveness  <---- */
import { mobile } from '../responsive.js';
/* ---->  MUI - Icons  <---- */
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
/* ---->  MUI - Badge  <---- */
import Badge from '@mui/material/Badge';


/* ---->  General  <---- */

const Container = styled.div`
height: 60px;
${mobile({backgroundColor: "red"})}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

/* ---->  Left side  <---- */

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
`;

/* ---->  Center  <---- */

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
`;

/* ---->  Right side  <---- */

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                EN
                </Language>
                <SearchContainer>
                <Input />
                    <Search style={{color:"grey", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    Ecommerce
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    REGISTER
                </MenuItem>
                <MenuItem>
                    LOGIN
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    
    </Container>
  )
}

export default Navbar;