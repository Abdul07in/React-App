import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import ImmerPack from "./components/ImmerPack";
import MainComponent from "./components/ManageState/MainComponent";
import ExpandableText from "./components/ExpandableText";

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
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Button color="info" onClick={() => setAlert(true)}>
        Click Here
      </Button>
      {alert && (
        <Alert onClose={() => setAlert(false)}>
          React<span className="fw-bold"> App</span>
        </Alert>
      )}
      <div className="container mt-4">
        <Like />
      </div>

      <div className="container mt-4">
        <ImmerPack />
      </div>
      <MainComponent />

      <ExpandableText maxChar={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quae
        esse vitae nobis ipsa suscipit quas rem autem fugiat dolorem quod
        quaerat nulla earum ipsum iure nemo minus excepturi tenetur ducimus. Sit
        provident veniam, non quidem iusto aperiam voluptatem optio, fuga unde
        nostrum expedita, obcaecati ex architecto maiores temporibus laborum
        quod adipisci facilis? Dolorem officia accusantium recusandae pariatur
        veritatis illum quasi numquam ad eos iste beatae temporibus doloremque
        reprehenderit tempore ratione, eum cupiditate cumque voluptate accusamus
        porro possimus molestias dicta dignissimos. Voluptas nihil fugiat eos
        voluptatum rem reiciendis vitae, voluptate aperiam excepturi laboriosam,
        accusamus ab eligendi quasi recusandae corporis inventore?
      </ExpandableText>
    </div>
  );
}

export default App;
