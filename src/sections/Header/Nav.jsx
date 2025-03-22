import React from 'react'
import './nav.css'

class Nav extends React.Component {

    render() {
        return(
            <>
                <nav className='hidden md:flex md:flex-row md:w-full md:py-4 md:justify-around'>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        Home
                    </p>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        About me
                    </p>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        Work-Ex
                    </p>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        Education
                    </p>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        Skills
                    </p>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        Projects
                    </p>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        Hobbies
                    </p>
                    <p className="nav-item hover:cursor-pointer transition-transform duration-300 hover:scale-110">
                        Description
                    </p>
                </nav>
            </>
        )
    }
}

export default Nav;