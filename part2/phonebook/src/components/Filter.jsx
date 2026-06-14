const Filter = ({ handleFilter }) => {
  return (
    <p>
      filter shown with <input type="text" onChange={handleFilter} />
    </p>
  );
};

export default Filter;
