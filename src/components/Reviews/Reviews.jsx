import { getMovieReviews } from '../../services/services';
import { useState, useEffect, useRef } from 'react';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import css from './Reviews.module.css';
const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    setIsEmpty(false);
    const fetchReviews = async () => {
      try {
        const feedback = await getMovieReviews(id);
        if (feedback.length === 0) {
          setIsEmpty(true);
          return;
        }
        setReviews(feedback);
      } catch (error) {
        setError(error);
      }
    };
    fetchReviews();
  }, [id]);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/movies/${id}`);

  return (
    <>
      <NavLink to={backLinkHref.current}>
        <button className={css.reviewsBtn}>👆roll up</button>
      </NavLink>
      {error && (
        <b>Sorry, there are some problems. Try to come back a little later.</b>
      )}

      {isEmpty && <b>There are no reviews at this time</b>}

      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
