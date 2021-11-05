import PropTypes from 'prop-types';
import React from 'react';

function ChooseSize(props) {
  const { id, size, onChangeOption } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Size</div>
      <label htmlFor={`${id}-size_s`} className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id={`${id}-size_s`}
          value="size_s"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${size === 'size_s' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-semibold">S</div>
        </div>
      </label>
      <label htmlFor={`${id}-size_m`} className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id={`${id}-size_m`}
          value="size_m"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${size === 'size_m' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-semibold">M</div>
        </div>
      </label>
      <label htmlFor={`${id}-size_l`} className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id={`${id}-size_l`}
          value="size_l"
          onChange={onChangeOption}
        />
        <div className={`
        w-9 h-9 rounded-full bg-brown-3 flex justify-center items-center
        ${size === 'size_l' ? 'border-solid border border-brown-4' : ''}
        `}
        >
          <div className="font-semibold">L</div>
        </div>
      </label>
    </div>
  );
}

ChooseSize.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.string,
  onChangeOption: PropTypes.func,
};

ChooseSize.defaultProps = {
  size: null,
  onChangeOption: null,
};

export default ChooseSize;
