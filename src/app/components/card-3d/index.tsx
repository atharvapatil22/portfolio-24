"use client";

import styles from "./card-3d.module.css";
import React, { useRef } from "react";

type Props = {
  keyWords: Array<string>;
};

function Card3D({ keyWords }: Props) {
  const boundingRef = useRef<DOMRect | null>(null);

  // 10degrees means the card will rotate from -5deg to +5 deg on each axis
  const X_ROTATION_RANGE = 10;
  const Y_ROTATION_RANGE = 10;

  return (
    <div className={`${styles.card_wrapper}`}>
      <div
        className={`${styles.card} transition-transform ease-out`}
        onMouseEnter={(e) => {
          boundingRef.current = e.currentTarget.getBoundingClientRect();
        }}
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseMove={(e) => {
          if (!boundingRef.current) return;
          const xPos = e.clientX - boundingRef.current.left;
          const yPos = e.clientY - boundingRef.current.top;

          const xPercent = xPos / boundingRef.current.width;
          const yPercent = yPos / boundingRef.current.height;

          // 0.5 is subtracted to normalize the range from 0~1 to -0.5~0.5
          const xRotation = (xPercent - 0.5) * X_ROTATION_RANGE;
          const yRotation = (0.5 - yPercent) * Y_ROTATION_RANGE;

          e.currentTarget.style.setProperty("--xRotation", `${yRotation}deg`);
          e.currentTarget.style.setProperty("--yRotation", `${xRotation}deg`);
        }}
      ></div>
    </div>
  );
}

export default Card3D;
