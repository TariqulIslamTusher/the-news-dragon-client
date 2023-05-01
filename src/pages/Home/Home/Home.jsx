import React from 'react';
import NewsCard from '../../News/NewsCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <>
            <h2>All News</h2>
           
            {
                data.map(SingleData => <NewsCard key={SingleData._id} data={SingleData}></NewsCard>) 
            }
        </>
    );
};

export default Home;