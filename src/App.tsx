import ListGroup from "./components/ListGroup";
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
    </div>
  );
}
export default App;
