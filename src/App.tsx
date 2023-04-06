import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const items = ["New York", "Tokyo", "London", "DC"];
  const [expenses, setExpenses] = useState([
    { id: 1, description: "USB Cable", amount: 100, category: "Utilites" },
    { id: 2, description: "iPhone X", amount: 10, category: "Utilites" },
    { id: 3, description: "Type-C Cable", amount: 20, category: "Utilites" },
    { id: 4, description: "Water", amount: 120, category: "Utilites" },
  ]);
  const [alertVisiable, setAlertVisiable] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visiableExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="List Component"
          onSelectedItem={handleSelectedItem}
        />
        <hr />
        <div>
          <h5>Alert Component:</h5>
          {alertVisiable && (
            <Alert onClose={() => setAlertVisiable(false)}>
              My <span>Alert</span>
            </Alert>
          )}
          <Button color="primary" onClick={() => setAlertVisiable(true)}>
            Show Alert
          </Button>
        </div>
        <hr />
        <div>
          <h5>Like Component:</h5>
          <Like onClick={() => console.log("Like Clicked")} />
        </div>
        <hr />
        <div>
          <h5>ExpandAbleText Component:</h5>
          <ExpandableText maxChars={100}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima dolore alias facilis, dolores eum at fugit
            reprehenderit autem reiciendis natus, optio pariatur deserunt
            praesentium quam voluptate provident debitis aspernatur. Harum
            facere nesciunt cupiditate aperiam corporis, minus eveniet
            repudiandae libero consectetur veniam, recusandae nemo earum quidem
            nihil officia, ab qui sequi fugiat cum et! Perspiciatis impedit
            omnis laudantium libero aliquam numquam eligendi nisi eaque quos
            architecto voluptatum nemo placeat dolorum, iste rerum atque veniam
            autem soluta mollitia repellat nam ipsa suscipit! Ut voluptas quos,
            et nostrum itaque accusamus possimus sit officiis veritatis
            sapiente, ducimus neque. Labore eos laboriosam natus minus?
          </ExpandableText>
        </div>
        <hr />
        <div>
          <h5>Form Component</h5>
          <Form />
        </div>
        <hr />
        <div>
          <h5>Expense List Form</h5>
          <div className="mb-5">
            <ExpenseForm
              onSubmit={(newExpense) =>
                setExpenses([
                  ...expenses,
                  { ...newExpense, id: expenses.length + 1 },
                ])
              }
            />
          </div>
          <h5>Expense List</h5>
          <div className="mb-3">
            <ExpenseFilter
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </div>
          <ExpenseList
            expenses={visiableExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      </div>
    </>
  );
}
export default App;
