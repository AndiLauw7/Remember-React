import React from "react";
import Expanse from "./components/Expanses/Expanse";
import NewExpanses from "./components/NewExpanses/NewExpanses";

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      // date: new Date(2020, 7, 14),
      date: new Date(),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      // date: new Date(2021, 2, 12)
      date: new Date(),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      // date: new Date(2021, 2, 28),
      date: new Date(),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      // date: new Date(2021, 5, 12),
      date: new Date(),
    },
  ];

  // ini jsx 6
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expanse, { items: expenses })
  // );

  return (
    <div>
      <NewExpanses />
      <Expanse items={expenses} />
    </div>
  );
};

export default App;
