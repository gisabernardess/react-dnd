import Board from "../components/Board";

import "../styles/views/document.css";

const Document = () => {
  return (
    <div className="wrapper">
      <Board id="paper" className="paper"></Board>
    </div>
  );
};

export default Document;
