import { useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { v4 as uuidv4 } from "uuid";

import Board from "../components/Board";
import Element from "../components/Element";

import { loadBigHeads } from "../services/api";

import "../styles/views/aside.css";

const Aside = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const elementsStorage = localStorage.getItem("elementsStorage");
    if (elementsStorage) {
      setElements(JSON.parse(elementsStorage));
    } else setElements(loadBigHeads());
  }, []);

  useEffect(() => {
    localStorage.setItem("elementsStorage", JSON.stringify(elements));
  }, [elements]);

  return (
    <div className="aside">
      <Board id="menu" className="menu" elements={elements}>
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

export default Aside;
