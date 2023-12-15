const TableHeaderCell = ({ children, className = "" }) => {
  return (
    <th className={`px-6 py-3 whitespace-nowrap ${className}`}>{children}</th>
  );
};

export default TableHeaderCell;
