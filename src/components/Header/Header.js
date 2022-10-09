import React from 'react';
import logo from '../../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-link'>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/order"}>Order</Link>
                <Link to={"/inventory"}>Inventory</Link>
                <Link to={"about"}>About</Link>
                <span style={{ color: "silver", marginLeft: '15px' }}>
                    {
                        user?.displayName && user.displayName
                    }
                </span>
                {
                    user?.photoURL && <img src={user.photoURL}
                        style={{
                            width: "35px",
                            margin: '5px',
                            borderRadius: '50%'
                        }} alt="img" />
                }
                {
                    user?.uid
                        ?
                        <button style={{
                            margin: "0px",
                            padding: "0px",
                            border: 'none'
                        }}
                            onClick={() => signOut(auth)}>
                            <FontAwesomeIcon

                                style={{
                                    backgroundColor: "#1C2B35",
                                    fontSize: '25px',
                                    color: 'white',
                                    cursor: 'pointer'
                                }} icon={faRightFromBracket} /></button>
                        :
                        <Link to='/login'>Log in</Link>
                }
            </div>
        </nav>
    );
};

export default Header;