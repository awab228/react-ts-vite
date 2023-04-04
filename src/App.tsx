import ListGroup from "./components/ListGroup";
function App() {
  const items = ["New York", "Tokyo", "London", "DC"];

  return (
    <div>
      <ListGroup items={items} heading="List" />
    </div>
  );
}
export default App;
