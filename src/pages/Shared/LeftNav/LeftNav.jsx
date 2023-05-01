import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from '../../../index.css';

const LeftNav = () => {
    const [category , setCategory] = useState([])

    useEffect( () =>{
        fetch('http://localhost:3000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='text-start text-muted'>
            <h2>All Categories</h2>
            {category.map(Scat=> <Link to={`/category/${Scat.id}`} className='ms-3 my-2 d-block text-decoration-none text-muted' key={Scat.id}>{Scat.name}</Link>)}
        </div>
    );
};

export default LeftNav;