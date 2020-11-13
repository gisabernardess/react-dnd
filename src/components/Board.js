import { useEffect, useState } from "react";

const Board = (props) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const elementsStorage = localStorage.getItem("elementsStorage");
    if (elementsStorage) {
      setElements(JSON.parse(elementsStorage));
    }
  }, []);

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    e.target.appendChild(card);

    if (e.target.id === "menu") {
      const index = elements.findIndex((element) => {
        return element.id === Number(card_id);
      });
      elements.push(elements.splice(index, 1)[0]);
      localStorage.setItem("elementsStorage", JSON.stringify(elements));
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Board;
