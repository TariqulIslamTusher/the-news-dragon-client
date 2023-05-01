import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../News/NewsCard';

const Category = () => {
    const data = useLoaderData()
    return (
        <>
            <h2>Category News   {data.length==0? "is Empty" : ''}</h2>
           
            {
                data.map(SingleData => <NewsCard key={SingleData._id} data={SingleData}></NewsCard>) 
            }
        </>
    );
};

export default Category;