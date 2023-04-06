import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        minima dolore alias facilis, dolores eum at fugit reprehenderit autem
        reiciendis natus, optio pariatur deserunt praesentium quam voluptate
        provident debitis aspernatur. Harum facere nesciunt cupiditate aperiam
        corporis, minus eveniet repudiandae libero consectetur veniam,
        recusandae nemo earum quidem nihil officia, ab qui sequi fugiat cum et!
        Perspiciatis impedit omnis laudantium libero aliquam numquam eligendi
        nisi eaque quos architecto voluptatum nemo placeat dolorum, iste rerum
        atque veniam autem soluta mollitia repellat nam ipsa suscipit! Ut
        voluptas quos, et nostrum itaque accusamus possimus sit officiis
        veritatis sapiente, ducimus neque. Labore eos laboriosam natus minus?
      </ExpandableText>
    </div>
  );
}
export default App;
