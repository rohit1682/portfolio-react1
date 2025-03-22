import React from 'react';
import Nav from './Nav';
import Profile from './Profile';

class Header extends React.Component {

    render() {
        return(
            <>
                <Nav/>
                <Profile content = {this.props.content}/>
            </>
        );
    }
}

export default Header;