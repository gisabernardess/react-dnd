import { useEffect, useState } from "react";

const Board = (props) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(props.elements);
  }, [props.elements]);

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    e.target.appendChild(card);

    if (e.target.id === "menu") {
      const posicao = elements?.findIndex(
        (element) => element?.id === Number(card_id)
      );
      elements.push(elements.splice(posicao, 1)[0]);
      setElements(elements);
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
      contentEditable={true}
      suppressContentEditableWarning={true}
    >
      {props.children}
    </div>
  );
};

export default Board;
