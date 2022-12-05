import React, { useState } from "react";
import Expanse from "./components/Expanses/Expanse";
import NewExpanses from "./components/NewExpanses/NewExpanses";

const App = (props) => {
  const Dummy_Expanses = [
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

  const [expanses, setExpanses] = useState(Dummy_Expanses);

  const ExpanseHandler = (expanse) => {
    // console.log(expanse);
    setExpanses((prevExpanse) => {
      return [expanse, ...prevExpanse];
    });
  };

  return (
    <div>
      <NewExpanses onAddExpanse={ExpanseHandler} />
      <Expanse items={expanses} />
    </div>
  );
};

export default App;
