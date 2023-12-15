import TableDataCells from "./TableDataCells";

const TableRow = ({ CellData = [] }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      {CellData.map((element, index) => (
        <TableDataCells key={index}>{element ? element : "N/A"}</TableDataCells>
      ))}
    </tr>
  );
};

export default TableRow;
