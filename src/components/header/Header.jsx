import React, { useContext, useState } from 'react';
import logo from '../../assets/Logo.svg';
import styled from 'styled-components';
import '../../App.css';
import { ExpenceContext } from '../../store';

const Header = () => {
    const { handlePagesChange } = useContext(ExpenceContext)
    return (
        <HeaderStyled>
            <div className='con'>
                <header>
                    <div className="header-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header-users">
                        <button onClick={() => handlePagesChange(1)}>login</button>
                    </div>
                    <div className="header-serch">
                        <button onClick={() => handlePagesChange(2)}>About</button>
                    </div>
                    <div className="header-actions">
                        <button onClick={() => handlePagesChange(3)}>Home pages</button>
                    </div>
                </header>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`
header{
    display:flex; 
     justify-content: space-between ; 
     align-items: center; 
     padding :10px  25px; 
     background:#AD9BE9;
     border-radius:12px;
     width: 730px;
}
button{
    width: 97px;
    height: 51px;
    color: white;
    background-color: #9627c9;
    border-radius: 12px;
}

`