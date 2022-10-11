import React, { useState } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");
  // update search text state
  const updateSearchInput = e => {
    setSearchEntry(e.target.value);
  };
  return (
    <form
      className="search-form"
      onSubmit={e => handleSubmit(e, history, searchEntry)}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
      />
      <button type="submit" className="search-button">
        <svg height="32" width="32">
       
        </svg>
      </button>
    </form>
  );
};

export default Form;