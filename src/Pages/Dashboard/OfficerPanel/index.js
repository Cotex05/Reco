import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export default function Officerpanel() {
  const handleUpdateRow = (data) => {};
  const handleDeleteRow = (data) => {};
  const OptionMenu = (props) => {
    return (
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item as="button" onClick={handleUpdateRow}>
          Update
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={handleDeleteRow}>
          Delete
        </Dropdown.Item>
      </DropdownButton>
    );
  };

  const columns = [
    "item_id",
    "item_description",
    "raw_material_id",
    "qty",
    "qty_unit",
    "in_date",
    "out_date",
  ];
  const rows = [1, 2, 3, 4, 5].map((e) => ({
    item_id: e,
    item_description: `item_description - ${e}`,
    raw_material_id: `raw_material_id - ${e}`,
    qty: 5,
    qty_unit: "kg",
    in_date: "22/01/2023",
    out_date: "22/02/2023",
  }));

  return (
    <>
      <h1>Officerpanel</h1>
      <div class="container text-center">
        <div class="row">
          {columns.map((e) => (
            <div class="col">{e}</div>
          ))}
        </div>
      </div>
      {rows.map((row) => (
        <div className="row">
          {columns.map((col) => (
            <div className="col">{row[col]}</div>
          ))}
          <div className="col">
            <OptionMenu row={row} />
          </div>
        </div>
      ))}
    </>
  );
}
