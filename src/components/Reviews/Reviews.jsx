import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/api';
import s from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(id);
        if (Array.isArray(response)) {
          setReviews(response);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <>
      {reviews.length !== 0 && (
        <div className={s.reviewsContainer}>
          <h2 className={s.reviewsTitle}>Movie Reviews</h2>
          <ul className={s.reviewsList}>
            {reviews.map(review => (
              <li key={review.id} className={s.reviewItem}>
                <p className={s.reviewAuthor}>{review.author}</p>
                <p className={s.reviewContent}>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div className={s.noReviews}>
          There are no reviews available for this movie.
        </div>
      )}
    </>
  );
};

export default Reviews;
