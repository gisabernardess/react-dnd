import { useEffect, useState } from "react";

import "../styles/components/element.css";

const Element = (props) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState({ h: 0, w: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showProperties, setShowProperties] = useState(false);

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setSize({ h: e.target.clientHeight, w: e.target.clientWidth });
    setPosition({ x: e.screenX, y: e.screenY });
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onClick={() => setShowProperties(!showProperties)}
      className="element tooltip"
      draggable="true"
      contentEditable={false}
      suppressContentEditableWarning={true}
    >
      {props.children}
      {showProperties && (
        <div
          className="tooltiptext"
          contentEditable={false}
          suppressContentEditableWarning={true}
        >
          <p>name: {name}</p>
          <p>size: {`${size.h} x ${size.w}`}</p>
          <p>position: {`${position.x}, ${position.y}`}</p>
        </div>
      )}
    </div>
  );
};

export default Element;
