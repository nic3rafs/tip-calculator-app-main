import React from "react";

const InputField = ({ labelText, id, icon, onChange, errorMessage, alt, value }) => {
  return (
    <div className="relative">
      <div className="pb-2">
        <label htmlFor={id} className=" inline text-md text-dark-grayish-cyan ">
          {labelText}
        </label>
        {errorMessage && (
          <p className="absolute text-[red] text-sm text-right inline right-0 mt-1 ">
            {errorMessage}
          </p>
        )}
      </div>

      <div className="relative  rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={icon} className="" alt={alt}></img>
        </div>
        <input
          type="number"
          name={id}
          id={id}
          className={`block w-full rounded-md bg-very-light-grayish-cyan  p-2 pl-12 pr-6 
            text-2xl text-right 
           text-very-dark-cyan placeholder-grayish-cyan/70 ${
             errorMessage ? "focus:outline-[red]" : "focus:outline-strong-cyan"
           }`}
          placeholder="0"
          onChange={onChange}
          value={value}
        ></input>
      </div>
    </div>
  );
};

export default InputField;
