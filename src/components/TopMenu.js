
import React from 'react';
import { Link } from 'react-router-dom';

function TopMenu() {
    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 30px',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
    };
    const logoStyle = {
        fontSize: '22px',
        fontWeight: 'bold',
    };
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 15px',
        transition: 'color 0.3s',
    };
    const linkHoverStyle = {
        color: '#ddd',
    };
    return (
        <div style={menuStyle}>
            <div style={logoStyle}>MyApp</div>
            <nav>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/services" style={linkStyle}>Services</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
                <Link to="/login" style={linkStyle}>Login</Link>
            </nav>
        </div>
    );
}

export default TopMenu;
