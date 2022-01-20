import React from "react";
const SearchBox = ({ onChange }) => {
  return (
    <React.Fragment>
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div>
    </React.Fragment>
  );
};

export default SearchBox;
