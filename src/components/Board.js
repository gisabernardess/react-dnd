import { useEffect, useState } from "react";
import { useHandleElements } from "../util/handleElements";

const Board = (props) => {
  const [asideElements, setAsideElements] = useState([]);
  const [documentElements, setDocumentElements] = useState([]);

  const {
    getElementPosition,
    handleReorderElements,
    handleSaveElements,
  } = useHandleElements();

  useEffect(() => {
    if (props.id === "menu") {
      setAsideElements(props.elements);
    }
    if (props.id === "paper") {
      setDocumentElements(props.documentElements);
    }
  }, [props]);

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    e.target.appendChild(card);

    if (e.target.id === "menu") {
      const index = getElementPosition(card_id, asideElements);
      if (index !== -1) {
        handleReorderElements(index, asideElements, "elementsStorage");
      } else {
        handleSaveElements(
          card_id,
          asideElements,
          "elementsStorage",
          "documentStorage"
        );
      }
    }

    if (e.target.id === "paper") {
      const index = getElementPosition(card_id, documentElements);
      if (index !== -1) {
        handleReorderElements(index, documentElements, "documentStorage");
      } else {
        handleSaveElements(
          card_id,
          documentElements,
          "documentStorage",
          "elementsStorage"
        );
      }
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
