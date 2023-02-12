import React from "react";

const RadioButton = ({ value, onChange, percent }) => {
  return (
    <div>
      <input
        type="radio"
        id={value}
        name="percent"
        value={value}
        className="peer hidden"
        onChange={onChange}
        checked={percent === `${value}`}
      ></input>
      <label
        htmlFor={value}
        className="block cursor-pointer select-none rounded-md p-2 text-center 
        text-white bg-very-dark-cyan text-2xl
      peer-checked:bg-strong-cyan peer-checked:text-very-dark-cyan"
      >
        {value}%
      </label>
    </div>
  );
};

export default RadioButton;
