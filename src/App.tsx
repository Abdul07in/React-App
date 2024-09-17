import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "New York", "Sydney", "Tokyo", "Paris"];

  function handleSelectItem(item: string) {
    console.log(item);
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
