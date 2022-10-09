import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }
    const handleUserLogIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserLogIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    {
                        loading && <p>Loading...</p>
                    }
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;