import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";

function App() {
  const items = ["New York", "Tokyo", "London", "DC"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="List"
        onSelectedItem={handleSelectedItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}
export default App;
