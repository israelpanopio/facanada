import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { getCategories } from '../services';

const Togglebar = ({isOpen, toggle}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink href="/about" onClick={toggle}>
                    About
                    </SideBarLink>
                </SideBarMenu>
                {categories.map((category) => (
                    <SideBarMenu key={category.slug}>
                        <SideBarLink href={`/${category.slug === "news" ? "discussion" : "category"}/${category.slug}?page=1`} onClick={toggle}>
                            {category.name}
                        </SideBarLink>
                    </SideBarMenu>
                ))}
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default Togglebar

const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cc2936;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: white;
   &:hover {
   color: red;
   }
`

export const Icon = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
   outline: none;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    text-align: center;

   &:hover {
    background-color: white;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 1rem 1.5rem;}
`;


const SideBarWrapper = styled.div`
    color: #fff;
    width: 90%;
    margin-ledt: 5%;
`

const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
`

const SideBarLink = styled(Link)`
    display: inline-block;
    position: relative;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: white;
    cursor: pointer;
    padding: 1rem;

&:hover {
    background-color: #fff;
    color: red;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 2rem;
    font-size: 2rem;
    font-weight: bold;
`