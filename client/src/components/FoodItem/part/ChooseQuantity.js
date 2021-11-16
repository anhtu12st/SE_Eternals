import { useRef } from 'react';

const ChooseQuantity = (props) => {
  const { quantity, onChangeOption } = props;
  const inputRef = useRef();

  const onChangeQuantity = (n) => {
    const newQuantity = (quantity + n) >= 1 ? (quantity + n) : 1;
    onChangeOption({ target: { name: 'quantity', value: newQuantity } });
  };

  return (
    <div className="py-3">
      <div className="pl-1 font-bold">Quantity</div>
      <div className="flex flex-row">
        <button
          type="button"
          className=" hover:bg-brown-2 active:bg-brown-2 rounded-full bg-brown-3 w-9 h-9 leading-9 font-medium text-2xl text-center"
          onClick={() => onChangeQuantity(-1)}
        >
          -
        </button>
        <input
          type="number"
          ref={inputRef}
          className="focus:outline-none w-12 text-center"
          name="quantity"
          value={quantity}
          onChange={onChangeOption}
        />
        <button
          type="button"
          className=" hover:bg-brown-2 active:bg-brown-2 rounded-full bg-brown-3 w-9 h-9 leading-9 font-medium text-2xl text-center"
          onClick={() => onChangeQuantity(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ChooseQuantity;
