import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ data }) => {
    const { _id, category_id, title, image_url, author, details } = data
    return (
        <div>
            <Card className='text-start my-3'>
                <Card.Header>
                    <h4>{author?.name}</h4>
                    <h5>{author?.published_date}</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />

                    <p>{details.length > 250 ? details.slice(0, 200) : details} <Link to={`/news/${_id}`}>Read More...</Link></p>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;