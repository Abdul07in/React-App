import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "New York", "Sydney", "Tokyo", "Paris"];

  const [alert, setAlert] = useState(false);

  function handleSelectItem(item: string) {
    console.log(item);
  }

  function handleOnClick(): void {
    console.log("Clicked");
    setAlert(!alert);
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="info" onClick={() => setAlert(true)}>
        Click Here
      </Button>
      {alert && (
        <Alert onClose={() => setAlert(false)}>
          React<span className="fw-bold"> App</span>
        </Alert>
      )}
    </div>
  );
}

export default App;
