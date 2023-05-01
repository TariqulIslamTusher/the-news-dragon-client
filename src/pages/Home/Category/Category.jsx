import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../News/NewsCard';

const Category = () => {
    const data = useLoaderData()

    console.log(data);
    return (
        <>
            <h2>Category News</h2>
            {
                data?.map(SingleData => <NewsCard key={SingleData._id} data={SingleData}></NewsCard>)
            }
        </>
    );
};

export default Category;