import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'api/api';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsObj, setReviewsObj] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieObj = async () => {
      try {
        const getReviewsObj = await getMovieReviews(movieId);
        setReviewsObj(getReviewsObj);
      } catch (error) {
        setError(error);
      }
    };
    getMovieObj();
  }, [movieId]);

  if (reviewsObj) {
    return (
      <section>
        <ul className={s.reviews}>
          {reviewsObj.map(({ id, author, content }) => (
            <li key={id} className={s.reviewsItem}>
              <p>{author}</p>
              <p className={s.reviewsItemDescr}>{content}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  if (reviewsObj === false) {
    return (
      <section className={s.reviews}>
        <p>Reviews is Emty</p>
      </section>
    );
  }
}
