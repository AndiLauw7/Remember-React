import ExpanseItem from "./ExpanseItem";
import "./Expanse.css";
import Card from "./Card";

export default function Expanse(props) {
  return (
    <div className="expenses">
      <ExpanseItem
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
      />
    </div>
  );
}
