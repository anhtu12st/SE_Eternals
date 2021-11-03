import React from 'react';
import PropTypes from 'prop-types';
import './styles/ChooseStyles.css';

function ChooseIce(props) {
  const { ice, onSetIce } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Ice</div>
      <label htmlFor="ice-30" className="inline-block p-1">
        <input
          type="radio"
          name="ice"
          className="ice-input hidden"
          id="ice-30"
          checked={ice === 'ice-30'}
          onChange={onSetIce}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-bold text-xs text-yellow-500">30%</div>
        </div>
      </label>
      <label htmlFor="ice-50" className="inline-block p-1">
        <input
          type="radio"
          name="ice"
          className="ice-input hidden"
          id="ice-50"
          checked={ice === 'ice-50'}
          onChange={onSetIce}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-bold text-xs text-brown-1">50%</div>
        </div>
      </label>
      <label htmlFor="ice-70" className="inline-block p-1">
        <input
          type="radio"
          name="ice"
          className="ice-input hidden"
          id="ice-70"
          checked={ice === 'ice-70'}
          onChange={onSetIce}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-bold text-xs text-red-500">70%</div>
        </div>
      </label>
    </div>
  );
}

ChooseIce.propTypes = {
  ice: PropTypes.string,
  onSetIce: PropTypes.func,
};

ChooseIce.defaultProps = {
  ice: null,
  onSetIce: null,
};

export default ChooseIce;
