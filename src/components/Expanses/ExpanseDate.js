import "./ExpanseDate.css";

export default function ExpanseDate(props) {
  //   const month = props.date.toLocaleString("en-GB", { timeZone: "UTC" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const years = props.date.getFullYear();
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{years}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
