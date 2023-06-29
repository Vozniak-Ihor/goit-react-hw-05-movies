import css from './InputMovies.module.css';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

export const InputMovies = ({ value, onChange }) => {
  return (
    <DebounceInput
      debounceTimeout={400}
      type="text"
      value={value}
      placeholder="Enter the film title"
      onChange={e => onChange(e.target.value)}
      className={css.input}
    />
  );
};

InputMovies.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
