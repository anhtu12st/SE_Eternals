import React from 'react';
import PropTypes from 'prop-types';

function ChooseMood(props) {
  const { id, mood, onChangeOption } = props;
  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Mood</div>
      <label htmlFor={`${id}-mood_hot`} className="inline-block p-1">
        <input
          type="radio"
          name="mood"
          className="mood-input hidden"
          id={`${id}-mood_hot`}
          value="mood_hot"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${mood === 'mood_hot' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1501px-FireIcon.svg.png"
            alt=""
            className="w-7 h-7"
          />
        </div>
      </label>
      <label htmlFor={`${id}-mood_cold`} className="inline-block p-1">
        <input
          type="radio"
          name="mood"
          className="mood-input hidden"
          id={`${id}-mood_cold`}
          value="mood_cold"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${mood === 'mood_cold' ? 'border-solid border border-brown-4' : ''}
        `}
        >
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
  id: PropTypes.number.isRequired,
  mood: PropTypes.string,
  onChangeOption: PropTypes.func,
};

ChooseMood.defaultProps = {
  mood: null,
  onChangeOption: null,
};

export default ChooseMood;
