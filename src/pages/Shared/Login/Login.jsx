import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            Login here

            <h3>new here? <Link to='/register'>register</Link></h3>
        </div>
    );
};

export default Login;