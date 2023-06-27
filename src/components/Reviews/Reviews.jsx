import { getMovieReviews } from '../../services/services';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  return (
    <>
      {error && <p>Sorry, there are some problems. Try to come back a little later.</p>}

      {isEmpty && <p>There are no reviews at this time</p>}

      {reviews &&
        reviews.map(({ id, author, content }) => (
          <ul key={id}>
            <li>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Reviews;
