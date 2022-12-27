import React, { useState } from "react";
import ExpanseDate from "./ExpanseDate";
import "./ExpananseItem.css";
import Card from "../UI/Card";

export default function ExpanseItem(props) {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //   const expenseDate = new Date();
  //   const expenseTitle = "Car Insurance";
  //   const exspenseAmount = 550.0;

  const [title, SetTitle] = useState(props.title);

  const ClickHandler = () => {
    SetTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* <div>Today {props.date.toISOString()}</div> */}
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <div>{/* <button onClick={ClickHandler}> Change Title</button> */}</div>
    </Card>
  );
}
