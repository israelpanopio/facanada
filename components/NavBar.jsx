import React, { useState, useEffect } from 'react';
import { FaBars, FaCanadianMapleLeaf } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';
import { getCategories } from '../services';


const NavBar = ({ toggle }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo href="/">
                    <Col><FaCanadianMapleLeaf /></Col>
                    <Col>
                        <LogoText>Filipino Aspirants</LogoText><LogoText>to Canada</LogoText>
                    </Col>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                            {categories.map((category) => (
                                <NavItem key={category.slug}>
                                    <NavLink href={`/category/${category.slug}`}>{category.name}</NavLink>
                                </NavItem>
                            ))}
                    </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar

export const Nav = styled.nav`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 3px solid black;
    margin: 0;
    background-color: white;

@media  screen and (max-width: 1040px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 50px;
z-index: 1;
width: 100%;
max-width: 1100px;
`

const NavLogo = styled(Link)`
display: grid;
grid-template-columns: 1fr 6fr;
color: #cc2936;
justify-self: flex-start;
cursor: pointer;
align-items: center;
font-size: 35px;
text-decoration: none;
margin: -10px 0 0;
padding: 0;
width: 220px;

&:hover {
    background: red;
    color: white;
}
`
export const Col = styled.div`
display: inline;
padding-left: 0.5rem;
`

const LogoText = styled.p`
font-size: 18px;
margin: 0;
font-weight: bold;
color: black;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 1040px) {
    font-size: 1.8rem;
    display: block;
    position: absolute;
    margin: -7px 0 0;
    top: 0;
    right: 0;
    transform: translate(-100%, 25%);
    cursor: pointer;
    color: black;
}
`


export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 1040px) {
    display: none;
}
`

export const NavItem = styled.li`
    align-items: center;
`

const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 16px;
font-weight: bold;

&:hover {
background-color: red;
color: #000;
transition: 0.2s ease-in-out;
padding-top: 7px;
padding-bottom: 7px;
border-radius: 8px;
}
`