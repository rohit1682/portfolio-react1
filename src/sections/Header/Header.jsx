import React from 'react';

import Intro from './Intro';
import Profile from './Profile';
import Nav from './Nav';

class Header extends React.Component {

    render() {
        return(
            <>
                {/* <Nav/> */}
                <Intro content = {this.props.content}/>
                <Profile content = {this.props.content}/>
            </>
        );
    }
}

export default Header;