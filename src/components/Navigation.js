import React, { useState } from 'react';
import styled from 'styled-components';

const Hamburger = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: 2px solid white;
    z-index: 9000;
    border-radius: 50%;
    padding: 0px 0 0 14px;
    width: 66px;
    height: 66px;
    filter: drop-shadow(0 0 0.5rem rgba(250, 0, 0, 0.76));

    :focus {
        outline: none;
    }
`;

const HamburgerLinesContainer = styled.div`
    background-color: transparent;
    div {
        width: 35px;
        height: 5px;
        background-color: white;
        margin: 6px 0;
        border-radius: 10px;
    }
`;

const MenuOpen = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.showNav ? '0' : '-100%'};
    width: 50vw;
    max-width: 500px;
    height: 100vh;
    background: #F29699;
    z-index: 1111;
    transition: right 300ms ease-in;
    border-left: 2px solid white;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 20%;
        display: block;
        width: 100%;
        text-align: center;

        li {
            padding: 10px 0;
        }
    }
    
    a {
        color: white;
        text-decoration: none;
        font-size: 20px;
    }
`;

const Navigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Hamburger onClick={() => setOpen(open ? false : true)}>
                <HamburgerLinesContainer>
                    <div></div>
                    <div></div>
                    <div></div>
                </HamburgerLinesContainer>
            </Hamburger>
            {open}
            <MenuOpen showNav={open}>
                <ul>
                    <li><a href="#topSection">Top</a></li>
                    <li><a href="#menuSection">Meny</a></li>
                    <li><a href="#visitUsSection">Öppettider</a></li>
                    <li><a href="#aboutUsSection">Om oss</a></li>
                </ul>
            </MenuOpen>
        </>
    )
}

export default Navigation;