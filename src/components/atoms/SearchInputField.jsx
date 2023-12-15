const SearchInputField = ({ ...attributes }) => {
  return (
    <input
      className="text-xs font-medium text-gray-700 outline-none bg-gray-100 px-6 py-3 rounded-lg"
      type="search"
      {...attributes}
    />
  );
};

export default SearchInputField;
