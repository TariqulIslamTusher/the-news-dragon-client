import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaBeer, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const newsData = useLoaderData()
    const { _id, category_id, title, image_url, author, details, total_view, rating } = newsData
    console.log(newsData);
    return (
        <div>
            <Card className='text-start my-3'>
                <Card.Header className='d-flex'>
                    <div className='flex-grow-1'>
                        <h4>{author?.name}</h4>
                        <h5>{moment(author?.published_date).format("D MMMM yyy")}</h5>
                    </div>
                    <div>
                        <h3>share</h3>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />

                    <p>{details}</p>

                    <Link to={`/category/${category_id}`}><Button variant='danger'>All News of this Category</Button></Link>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            readonly
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                    <div><FaEye></FaEye>{total_view}</div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default News;