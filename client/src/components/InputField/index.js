// eslint-disable-next-line import/no-unresolved
import { useController } from 'react-hook-form';

function InputField({
  type, name, control, placeholder, label, rules, required,
}) {
  const {
    field: {
      value, onChange, onBlur,
    },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      <div
        className="f-outline px-2 relative border rounded-lg focus-within:border-brown-1 mt-8 sm:mt-10"
      >
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          name={name}
          placeholder={placeholder}
          className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="name"
          className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0"
        >
          {required ? `${label} *` : label}
        </label>
      </div>
      { invalid && <p className="text-red-500 font-medium text-sm mt-2 ml-2">{error.message}</p>}
    </div>
  );
}

export default InputField;
