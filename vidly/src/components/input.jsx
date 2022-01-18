import React from "react";
const Input = ({ name, value, label, type, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {/* input has its own state, so its uncontrolled meaning there is no single source of truth ...using a value attribute can make it controlled */}
      <input
        id={name}
        value={value}
        type={type}
        name={name}
        className="form-control"
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
