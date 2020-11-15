import { useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { v4 as uuidv4 } from "uuid";

import Board from "../components/Board";
import Element from "../components/Element";

import "../styles/views/document.css";

const Document = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const documentStorage = localStorage.getItem("documentStorage");
    if (documentStorage) {
      setElements(JSON.parse(documentStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("documentStorage", JSON.stringify(elements));
  }, [elements]);

  return (
    <div className="wrapper">
      <Board id="paper" className="paper" documentElements={elements}>
        {elements?.map((element) => {
          return (
            <Element key={uuidv4()} id={element?.id} name={element?.name}>
              <BigHead {...element?.content} />
            </Element>
          );
        })}
      </Board>
    </div>
  );
};

export default Document;
