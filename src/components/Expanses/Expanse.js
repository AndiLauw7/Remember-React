import ExpanseItem from "./ExpanseItem";
import "./Expanse.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpanseFilter";
import { useState } from "react";

export default function Expanse(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}
        />

        {props.items.map((expanses) => (
          <>
            <ExpanseItem
              title={expanses.title}
              amount={expanses.amount}
              date={expanses.date}
            />
          </>
        ))}
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
