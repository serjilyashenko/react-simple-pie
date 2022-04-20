import React, { useEffect, useRef } from "react";

// import { SimplePie } from "../packages/react-simple-pie/src/SimplePie";
import {
  simplePieElement,
  defaultPalette,
} from "../packages/simple-pie/src/simple-pie";
import "./app.css";

export function App(): JSX.Element {
  const borderedPieRef = useRef<HTMLDivElement>(null);
  const borderLessPieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (borderedPieRef.current) {
      const svgElement = simplePieElement([2, 1, 1, 2]);
      borderedPieRef.current.appendChild(svgElement);
    }
    if (borderLessPieRef.current) {
      const svgElement = simplePieElement(
        [2, 1, 1, 2],
        defaultPalette,
        "transparent"
      );
      borderLessPieRef.current.appendChild(svgElement);
    }
  });

  return (
    <div>
      <div className="app">
        <h1>React Simple Pie</h1>
        <div className="simple-pie-container">
          {/*<SimplePie values={[1, 2, 1, 2]} />*/}
          {/*<SimplePie values={[1, 1, 1]} />*/}
          <div className="row">
            <div ref={borderedPieRef} />
            <div ref={borderLessPieRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
