import React from "react";
import styles from "./toolbox.module.css";

function Toolbox() {
  return (
    <div className={styles.toolbox}>
      <div className={styles.section}>
        <p>ReactJS</p>
        <p>Typescript</p>
        <p>NextJS</p>
        <p>ReactNative</p>
        <p>C++</p>
        <p>Python</p>
      </div>
      <div className={styles.section}>
        <p>Java</p>
        <p>Android Studio</p>
        <p>Firebase</p>
        <p>MongoDB</p>
        <p>Postgresql</p>
        <p>NodeJs</p>
      </div>
      <div className={styles.section}>
        <p>WordPress</p>
        <p>Django</p>
        <p>Webflow</p>
        <p>Ruby on Rails</p>
        <p>Supabase</p>
        <p>Expo</p>
      </div>
    </div>
  );
}

export default Toolbox;
