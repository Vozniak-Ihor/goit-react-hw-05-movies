import css from './InputMovies.module.css';

export const InputMovies = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder='Enter the film title'
      onChange={e => onChange(e.target.value)}
      className={css.input}
    />
  );
};
