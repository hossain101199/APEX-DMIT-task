const PaginationButton = ({ title = "", className = "", ...attributes }) => {
  return (
    <li>
      <button
        className={`px-3 py-3 leading-tight text-gray-500  border border-gray-300  hover:bg-gray-200 hover:text-gray-700 ${className}`}
        {...attributes}
      >
        {title}
      </button>
    </li>
  );
};

export default PaginationButton;
