import React from 'react';
import PropTypes from 'prop-types';
import './styles/ChooseStyles.css';

function ChooseMood(props) {
  const { mood, onSetMood } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Mood</div>
      <label htmlFor="mood-hot" className="inline-block p-1">
        <input
          type="radio"
          name="mood"
          className="mood-input hidden"
          id="mood-hot"
          checked={mood === 'mood-hot'}
          onChange={onSetMood}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1501px-FireIcon.svg.png"
            alt=""
            className="w-7 h-7"
          />
        </div>
      </label>
      <label htmlFor="mood-cold" className="inline-block p-1">
        <input
          type="radio"
          name="mood"
          className="mood-input hidden"
          id="mood-cold"
          checked={mood === 'mood-cold'}
          onChange={onSetMood}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <img
            src="https://icon-library.com/images/ice-icon/ice-icon-9.jpg"
            alt=""
            className="w-7 h-7"
          />
        </div>
      </label>
    </div>
  );
}

ChooseMood.propTypes = {
  mood: PropTypes.string,
  onSetMood: PropTypes.func,
};

ChooseMood.defaultProps = {
  mood: null,
  onSetMood: null,
};

export default ChooseMood;
