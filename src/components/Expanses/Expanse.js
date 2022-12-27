import ExpanseItem from "./ExpanseItem";
import "./Expanse.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpanseFilter";
import { useState } from "react";
import ExpanseList from "./ExpanseList";

export default function Expanse(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpanses = props.items.filter((expanses) => {
    return expanses.date.getFullYear().toString() === filteredYear;
  });

  // Cara ke 4 di file ExpanseList

  // cara ke 3

  // let expenseContent = <p>No Record Founds</p>;

  // if (filteredExpanses.length > 0) {
  //   expenseContent = filteredExpanses.map((expanses) => (
  //     <ExpanseItem
  //       key={expanses.id}
  //       title={expanses.title}
  //       amount={expanses.amount}
  //       date={expanses.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}
        />

        {/* {expenseContent} */}

        <ExpanseList items={filteredExpanses} />
        {/* cara ke 1 */}
        {/* {filteredExpanses.length === 0 ? (
          <p>No Record Founds</p>
        ) : (
          filteredExpanses.map((expanses) => (
            <ExpanseItem
              key={expanses.id}
              title={expanses.title}
              amount={expanses.amount}
              date={expanses.date}
            />
          ))
        )} */}

        {/* cara ke 2 */}
        {/* {filteredExpanses.length === 0 && <p>No Record Founds</p>}
        {filteredExpanses.length > 0 &&
          filteredExpanses.map((expanses) => (
            <ExpanseItem
              key={expanses.id}
              title={expanses.title}
              amount={expanses.amount}
              date={expanses.date}
            />
          ))} */}

        {/* <ExpanseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpanseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpanseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpanseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
}
