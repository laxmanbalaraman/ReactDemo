import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) =>
    item[this.props.valueProperty] + (column.path || column.key);

  render() {
    // we name the variabales in such a way that we make this component decoupled from the parent component.
    const { data, columns, valueProperty } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[valueProperty]}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  valueProperty: "_id",
};

export default TableBody;
