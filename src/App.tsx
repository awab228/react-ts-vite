import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  const items = ["New York", "Tokyo", "London", "DC"];

  const [alertVisiable, setAlertVisiable] = useState(false);

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
      {alertVisiable && (
        <Alert onClose={() => setAlertVisiable(false)}>
          My <span>Alert</span>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisiable(true)}>
        Show Alert
      </Button>
      <Like onClick={() => console.log("Like Clicked")} />
    </div>
  );
}
export default App;
