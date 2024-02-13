import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { useTheme } from '../context/theme-context';

const Navbar = () => {

    const { theme, toggletheme } = useTheme();


    return (
        <nav className='Navbar'>
            <div>
                <Link className='Link' to="/" >Home</Link>
                <Link className='Link' to="/about" >About</Link>
                <Link className='Link' to="/contact" >Contact</Link>
                 <div>

               
                    <input
                        type='checkbox'
                        onChange={    toggletheme
                        }
                        checked={theme === "dark"}
                    />

              
                 </div>
            </div>
        </nav>

    )
}

export default Navbar