import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'api/api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(id);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [id]);

  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;
