import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div className='login-form'>
            <div>
                <h2>Sign-in</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" /><br />
                    <input type="password" name="" id="" /><br /> <br />
                    <input className='btn-regular' type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <br /> <Link to='/register'>Create Account</Link></p>
                <div>------------or-------------</div>
                <button onClick={signInUsingGoogle} className='btn-regular2'>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;