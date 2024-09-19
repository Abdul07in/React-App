import produce from "immer";
import { useState } from "react";

const ImmerPack = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBug = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} : {bug.fixed ? "Fixed" : "Not Fixed"}
          </li>
        ))}
      </ul>
      <button onClick={handleBug}>Click</button>
    </div>
  );
};

export default ImmerPack;
