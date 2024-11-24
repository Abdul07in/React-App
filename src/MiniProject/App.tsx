import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

// Define a type for expenses
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [expenses, setExpenses] = useState<Expense[] | null>(null); // Use the type here

  const visibleExpenses = selectedCategory
    ? expenses?.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses((prev) => [
              ...(prev || []),
              { ...expense, id: (prev?.length || 0) + 1 },
            ])
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
          setExpenses((prev) => (prev || []).filter((e) => e.id !== id));
        }}
      />
    </>
  );
};

export default App;
