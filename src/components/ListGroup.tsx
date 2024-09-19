import { useState } from "react";
import styled from "styled-components";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.active ? "lightgreen" : "transparent")};
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="container">
      <h1 className="text-center h-1">{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group shadow-lg" style={{ cursor: "pointer" }}>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            // Avoid passing `active` prop to the DOM
            as="li"
          >
            <BsFillCalendar2CheckFill /> {item}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
