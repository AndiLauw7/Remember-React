import React, { useState } from "react";
import "./ExpansesForm.css";

export default function ExpansesForm(props) {
  // Multi state irisan(bagian) atau slice
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   One State
  //   const [userInputs, setUsersInputs] = useState()({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
    // setUsersInputs({
    //   ...userInputs({
    //     enteredTitle: event.target.value,
    //   }),
    // });

    // previous State
    // setUsersInputs((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUsersInputs({
    //   ...userInputs({
    //     enteredAmount: event.target.value,
    //   }),
    // });
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUsersInputs({
    //   ...userInputs({
    //     enteredDate: event.target.value,
    //   }),
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expanseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expanseData);
    props.onSaveExpanseData(expanseData);
    // Two way binding
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0,01"
            step="0,01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expanse</button>
      </div>
    </form>
  );
}
