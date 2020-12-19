import React from "react";

const Input = ({ label = "", value = "", setValue, ...rest }) => {
  return (
    <>
      <label>
        {label}:
        <input
          type="text"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...rest}
        />
      </label>
    </>
  );
};

export default Input;
