import "./ExpananseItem.css";
import ExpanseDate from "./ExpanseDate";

export default function ExpanseItem(props) {
  //   const current = new Date();
  //   const date = `${current.getDate()}/${
  //     current.getMonth() + 1
  //   }/${current.getFullYear()}`;

  //   const expenseDate = new Date();
  //   const expenseTitle = "Car Insurance";
  //   const exspenseAmount = 550.0;

  return (
    <div className="expense-item">
      {/* <div>Today {props.date.toISOString()}</div> */}
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
