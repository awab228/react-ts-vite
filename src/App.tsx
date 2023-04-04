import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

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
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}
export default App;
