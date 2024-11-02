import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: -1, description: "ddd", amount: 10, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses.filter((e) => e.id !== -1);

  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      />
    </>
  );
};

export default App;
