import { useState, useEffect } from "react";
import { MdClear } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Button from "src/components/Button/Button";
import css from "./SearchForm.module.css";

const Search = ({ searchValue, onSearch }) => {
  const [value, setValue] = useState(searchValue);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  const handleClear = () => {
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(value);
  };

  useEffect(() => {
    if (searchValue != value) {
      setValue(searchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css["input-wrapper"]}>
        <input
          className={css.input}
          type="text"
          name="search"
          value={value}
          onChange={handleSearch}
          placeholder="Enter film name"
        />
        <button
          type="button"
          className={css["clear-button"]}
          onClick={handleClear}
        >
          <MdClear className={css.icon} />
        </button>
      </div>
      <Button title="Search" type="submit" icon={<FaSearch />} />
    </form>
  );
};

export default Search;
