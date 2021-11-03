import PropTypes from 'prop-types';
import React from 'react';
import './styles/ChooseStyles.css';

function ChooseSize(props) {
  const { size, onSetSize } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Size</div>
      <label htmlFor="size-s" className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id="size-s"
          checked={size === 'size-s'}
          onChange={onSetSize}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-semibold">S</div>
        </div>
      </label>
      <label htmlFor="size-m" className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id="size-m"
          checked={size === 'size-m'}
          onChange={onSetSize}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-semibold">M</div>
        </div>
      </label>
      <label htmlFor="size-l" className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id="size-l"
          checked={size === 'size-l'}
          onChange={onSetSize}
        />
        <div className="w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center">
          <div className="font-semibold">L</div>
        </div>
      </label>
    </div>
  );
}

ChooseSize.propTypes = {
  size: PropTypes.string,
  onSetSize: PropTypes.func,
};

ChooseSize.defaultProps = {
  size: null,
  onSetSize: null,
};

export default ChooseSize;
