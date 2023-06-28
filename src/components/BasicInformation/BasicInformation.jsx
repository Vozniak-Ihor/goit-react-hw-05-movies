import React from 'react';
import css from './BasicInformation.module.css';

export const BasicInformation = ({ movieDetail }) => {
  const { poster_path, original_title, overview, vote_average, genres } =
    movieDetail;
  return (
    <div className={css.container}>
      <div className={css.containerMovieDetail}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt="placard"
            className={css.img}
          />
        </div>
        <div>
          <h2 className={css.title}>{original_title}</h2>
          <p className={css.voteAverage}>{Math.round(vote_average * 10)} %</p>
          <h4 className={css.titleOverview}>Overview</h4>
          <p className={css.Overview}>{overview}</p>
          <h4 className={css.titleGenres}>Genres</h4>
          <ul className={css.listGenres}>
            {genres?.map(item => (
              <li key={item.id} className={css.itemGenres}>
                <p className={css.Genres}>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};