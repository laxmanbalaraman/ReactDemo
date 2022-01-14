import React from "react";
const ListGroup = (props) => {
  const { items, onItemSelect, valueProperty, textProperty, selectedItem } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        // to make this component independent and reusable send item properties as props so that it can be universal
        // and used anywhere item._id (specific) -> item[valueProperty] (generic) where props.valueProperty is _id.
        // but adding too many props is not good, so we can add these types of props as default props.
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          style={{ cursor: "pointer" }}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
