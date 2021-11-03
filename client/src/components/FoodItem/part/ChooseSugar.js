import React from 'react';
import PropTypes from 'prop-types';
import './styles/ChooseStyles.css';

function ChooseSugar(props) {
  const { sugar, onSetSugar } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Sugar</div>
      <label htmlFor="sugar-30" className="inline-block p-1">
        <input
          type="radio"
          name="sugar"
          className="sugar-input hidden"
          id="sugar-30"
          checked={sugar === 'sugar-30'}
          onChange={onSetSugar}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-bold text-xs text-yellow-500">30%</div>
        </div>
      </label>
      <label htmlFor="sugar-50" className="inline-block p-1">
        <input
          type="radio"
          name="sugar"
          className="sugar-input hidden"
          id="sugar-50"
          checked={sugar === 'sugar-50'}
          onChange={onSetSugar}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-bold text-xs text-brown-1">50%</div>
        </div>
      </label>
      <label htmlFor="sugar-70" className="inline-block p-1">
        <input
          type="radio"
          name="sugar"
          className="sugar-input hidden"
          id="sugar-70"
          checked={sugar === 'sugar-70'}
          onChange={onSetSugar}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-bold text-xs text-red-500">70%</div>
        </div>
      </label>
    </div>
  );
}

ChooseSugar.propTypes = {
  sugar: PropTypes.string,
  onSetSugar: PropTypes.func,
};

ChooseSugar.defaultProps = {
  sugar: null,
  onSetSugar: null,
};

export default ChooseSugar;
