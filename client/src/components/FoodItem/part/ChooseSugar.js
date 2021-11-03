import React from 'react';
import PropTypes from 'prop-types';

function ChooseSugar(props) {
  const { sugar, onChangeOption } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Sugar</div>
      <label htmlFor="sugar_30" className="inline-block p-1">
        <input
          type="radio"
          name="sugar"
          className="sugar-input hidden"
          id="sugar_30"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${sugar === 'sugar_30' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-bold text-xs text-yellow-500">30%</div>
        </div>
      </label>
      <label htmlFor="sugar_50" className="inline-block p-1">
        <input
          type="radio"
          name="sugar"
          className="sugar-input hidden"
          id="sugar_50"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${sugar === 'sugar_50' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-bold text-xs text-brown-1">50%</div>
        </div>
      </label>
      <label htmlFor="sugar_70" className="inline-block p-1">
        <input
          type="radio"
          name="sugar"
          className="sugar-input hidden"
          id="sugar_70"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${sugar === 'sugar_70' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-bold text-xs text-red-500">70%</div>
        </div>
      </label>
    </div>
  );
}

ChooseSugar.propTypes = {
  sugar: PropTypes.string,
  onChangeOption: PropTypes.func,
};

ChooseSugar.defaultProps = {
  sugar: null,
  onChangeOption: null,
};

export default ChooseSugar;
