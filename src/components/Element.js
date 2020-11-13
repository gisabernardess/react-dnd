import "../styles/components/element.css";

const Element = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className="element"
      draggable="true"
    >
      {props.children}
    </div>
  );
};

export default Element;
