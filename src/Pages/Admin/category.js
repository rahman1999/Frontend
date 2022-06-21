import React from "react";
import { useEffect } from "react";
import TableLayout from "Components/Form/Layout/TableLayout";
import { getCategory } from "Reducer/statevalue";

import { useDispatch, useSelector } from "react-redux";
import { CATEGORY } from "../CONSTANTS";

function Category() {
  const dispatch = useDispatch();
  const column = [
    { field: "id", header: "Id" },
    { field: "category_name", header: "Category" },
    { header: "Action" },
  ];

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const category = useSelector((state) => state.tokenvalue.value.categorydata);
  const loading = useSelector((state) => state.tokenvalue.value.loading);

  console.log(category);

  return (
    <div style={{ margin: "20px" }}>
      {!loading ? (
        <TableLayout data={category} columns={column} api={CATEGORY} />
      ) : null}
    </div>
  );
}

export default Category;
