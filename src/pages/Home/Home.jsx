import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { HomeList } from '../../components/HomeList/HomeList';
import s from './Home.module.css';
import PropTypes from 'prop-types';

export default function Home() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(trendings => {
      setTrendings(trendings);
    });
  }, []);

  return (
    <div className={s.trendingDiv}>
      <h1 className={s.treandingHeading}>Popular today</h1>
      <ul className={s.trendingUl}>
        {trendings.length > 0 && <HomeList trendings={trendings} />}
      </ul>
    </div>
  );
}

HomeList.propTypes = {
  trendings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
