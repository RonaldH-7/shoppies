import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>The Shoppies: Movie awards for entrepreneurs</h1>
                <Navigation />
            </header>
        );
    }
}

export default Header;