import React from "react";
import "./NewExpanses.css";
import ExpansesForm from "./ExpansesForm";

export default function NewExpanses(props) {
  const saveEnteredDataHandler = (enteredExpanseData) => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    // console.log(expanseData);
    props.onAddExpanse(expanseData);
  };
  return (
    <div className="new-expense">
      <ExpansesForm onSaveExpanseData={saveEnteredDataHandler} />
    </div>
  );
}
