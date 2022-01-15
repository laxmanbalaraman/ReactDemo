import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, columns, onSort, selectedColumn }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        onSort={onSort}
        selectedColumn={selectedColumn}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
