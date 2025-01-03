
// Updated TopMenu Component for Integration
import React from 'react';
import { Link } from 'react-router-dom';

function TopMenu() {
    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#000',
        color: '#fff',
    };
    const logoStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px',
    };
    const buttonStyle = {
        padding: '5px 15px',
        backgroundColor: '#fff',
        color: '#000',
        border: 'none',
        cursor: 'pointer',
    };
    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: '#000',
        color: '#fff',
    };

    return (
        <div style={menuStyle}>
            <div style={logoStyle}>MyApp</div>
            <nav>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/pricing" style={linkStyle}>Pricing</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
                <Link to="/support" style={linkStyle}>Support</Link>
                <Link to="/join" style={linkStyle}>Join</Link>
                <Link to="/login" style={linkStyle}>Login</Link>
            </nav>
        </div>
    );
}

export default TopMenu;
