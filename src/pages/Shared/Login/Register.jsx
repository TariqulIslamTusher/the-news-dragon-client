import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            Register Here

            <h3>back to? <Link to='/login'>login</Link></h3>
        </div>
    );
};

export default Register;