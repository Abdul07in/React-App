import { useState } from "react";
import styled from "styled-components";
import { BsFillCalendar2CheckFill, BsFillCircleFill } from "react-icons/bs";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: ${(props) => (props.active ? "lightgreen" : "transparent")};
`;

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <div className="container">
      <h1 className="text-center h-1">{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List className="list-group shadow-lg " style={{ cursor: "pointer" }}>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            <BsFillCalendar2CheckFill /> {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListGroup;
