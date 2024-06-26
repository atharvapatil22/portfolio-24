import React from "react";
import styles from "./projects-list.module.css";
import Card3D from "../card-3d";

type Props = {
  title: string;
  desc: string;
  keyWords: Array<string>;
  rank: number;
};

function ProjectsList({ title, desc, keyWords, rank }: Props) {
  return (
    <div className={styles.container}>
      {rank % 2 == 0 && (
        <div className="w-1/2">
          <Card3D keyWords={keyWords} />
        </div>
      )}

      <div className={`w-1/2 px-4 ${styles.project_info}`}>
        <h2>{title}</h2>
        <p>{desc}</p>
        {rank == 0 && <p>asdji</p>}
      </div>

      {rank % 2 == 1 && (
        <div className="w-1/2">
          <Card3D keyWords={keyWords} />
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
