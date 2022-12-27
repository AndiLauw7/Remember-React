import React from "react";
import ExpanseItem from "./ExpanseItem";
import "./ExpanseList.css";

const ExpanseList = (props) => {
  //   let expenseContent = <p>No Record Founds</p>;

  if (props.items.length === 0) {
    return <h2 className="expanses-list_fallback">Found no expanses</h2>;
  }
  return (
    <ul className="expanses-list">
      {props.items.map((expanses) => (
        <ExpanseItem
          key={expanses.id}
          title={expanses.title}
          amount={expanses.amount}
          date={expanses.date}
        />
      ))}
    </ul>
  );
};

export default ExpanseList;
