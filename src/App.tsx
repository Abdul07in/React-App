import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "New York", "Sydney", "Tokyo", "Paris"];

  function handleSelectItem(item: string) {
    console.log(item);
  }

  return (
    <div>
      <Alert>
        React<span className="fw-bold"> App</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
