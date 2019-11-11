import React from 'react';
import useDark from './useDark';

const Navbar = () => {
    const [dark, setDark] = useDark('');

    const toggleMode = (e) => {
        e.preventDefault();
        setDark(!dark);
    };

    return (
        <nav className="navBar">
            <div>
                <h1>Women Soccer World Cup</h1>
                <h3>Google search, July 2019</h3>
            </div>
            <div className='dark_toggle' data-testid='toggle'>
                <div onClick={toggleMode}
                className={dark ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
};

export default Navbar