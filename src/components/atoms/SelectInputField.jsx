const SelectInputField = ({
  placeholder = "",
  options = [{ value: "", title: "" }],
  ...attributes
}) => {
  return (
    <select
      className="text-xs font-medium text-gray-700 bg-gray-100 border-none outline-none px-6 py-3 rounded-lg"
      defaultValue=""
      {...attributes}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default SelectInputField;
