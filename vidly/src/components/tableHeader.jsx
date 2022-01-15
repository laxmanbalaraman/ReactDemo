import React, { Component } from "react";

// data to be received via props
// column: array
// selectedColumn: object
// onSort(): function

class TableHeader extends Component {
  raiseSort(path) {
    const selectedColumn = { ...this.props.selectedColumn };
    if (selectedColumn.path === path)
      selectedColumn.order = selectedColumn.order === "asc" ? "desc" : "asc";
    else {
      selectedColumn.path = path;
      selectedColumn.order = "asc";
    }
    this.props.onSort(selectedColumn);
  }

  renderSortIcon(column) {
    const { selectedColumn } = this.props;
    if (column.path !== selectedColumn.path) return null;
    return selectedColumn.order === "asc" ? (
      <i className="fa fa-sort-asc"></i>
    ) : (
      <i className="fa fa-sort-desc"></i>
    );
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
