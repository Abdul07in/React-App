import { useState } from "react";

const StateManagement = () => {
  // Excercise 1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Majeed",
      score: 0,
    },
  });

  const handleGame = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        score: game.player.score + 1,
      },
    });
  };

  // Excercise 2
  const [pizza, setPizza] = useState({
    name: "Margherita",
    toppings: ["mozzarella"],
  });

  const handlePizza = (toppings: string) => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, toppings],
    });
  };

  // Excercise 3

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  // Excercise 4

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBug = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  // Excercise 5

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleTags = () => {
    // Add
    setTags([...tags, "sad"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "excited" : tag)));

    // Reset
    setTags(["happy", "cheerful"]);
  };

  return <button onClick={() => handlePizza("pepperoni")}>Click</button>;
};

export default StateManagement;
