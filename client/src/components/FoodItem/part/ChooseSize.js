import PropTypes from 'prop-types';
import React from 'react';

function ChooseSize(props) {
  const { size, onChangeOption } = props;

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Size</div>
      <label htmlFor="size_s" className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id="size_s"
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
      <label htmlFor="size_m" className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id="size_m"
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
      <label htmlFor="size_l" className="inline-block p-1">
        <input
          type="radio"
          name="size"
          className="size-input hidden"
          id="size_l"
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
  size: PropTypes.string,
  onChangeOption: PropTypes.func,
};

ChooseSize.defaultProps = {
  size: null,
  onChangeOption: null,
};

export default ChooseSize;
