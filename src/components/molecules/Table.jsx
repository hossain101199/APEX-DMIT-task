import TableHeaderCell from "../atoms/TableHeaderCell";

const Table = ({ columnTitles = [], children }) => {
  return (
    <div className="relative overflow-hidden overflow-x-auto rounded-lg shadow-md">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            {columnTitles.map((element) => (
              <TableHeaderCell key={element}>{element}</TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
