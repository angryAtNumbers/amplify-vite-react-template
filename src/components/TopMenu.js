
import React from 'react';
import { Link } from 'react-router-dom';

function TopMenu() {
    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        backgroundColor: '#1A1A1A',
        color: '#EDEDED',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '18px',
    };
    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        textDecoration: 'none',
    };
    const navStyle = {
        display: 'flex',
        gap: '20px',
    };
    const linkStyle = {
        color: '#EDEDED',
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'color 0.3s ease',
    };
    return (
        <div style={menuStyle}>
            <Link to="/" style={logoStyle}>MyBrand</Link>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/services" style={linkStyle}>Services</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
            </nav>
        </div>
    );
}

export default TopMenu;
