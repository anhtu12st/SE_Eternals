import React from 'react';
import PropTypes from 'prop-types';

function ChooseIce(props) {
  const { id, ice, onChangeOption } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Ice</div>
      <label htmlFor={`${id}-ice_30`} className="inline-block p-1">
        <input
          type="radio"
          name="ice"
          className="ice-input hidden"
          id={`${id}-ice_30`}
          value="ice_30"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${ice === 'ice_30' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-bold text-xs text-yellow-500">30%</div>
        </div>
      </label>
      <label htmlFor={`${id}-ice_50`} className="inline-block p-1">
        <input
          type="radio"
          name="ice"
          className="ice-input hidden"
          id={`${id}-ice_50`}
          value="ice_50"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${ice === 'ice_50' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-bold text-xs text-brown-1">50%</div>
        </div>
      </label>
      <label htmlFor={`${id}-ice_70`} className="inline-block p-1">
        <input
          type="radio"
          name="ice"
          className="ice-input hidden"
          id={`${id}-ice_70`}
          value="ice_70"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${ice === 'ice_70' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-bold text-xs text-red-500">70%</div>
        </div>
      </label>
    </div>
  );
}

ChooseIce.propTypes = {
  id: PropTypes.number.isRequired,
  ice: PropTypes.string,
  onChangeOption: PropTypes.func,
};

ChooseIce.defaultProps = {
  ice: null,
  onChangeOption: null,
};

export default ChooseIce;
