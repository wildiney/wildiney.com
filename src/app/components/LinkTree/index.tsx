import React from "react";
import * as reacticons from "react-icons/ai";
import { ButtonPortfolio } from "../ButtonPortfolio";
import styles from "./linktree.module.css";

export default function LinkTree({ data }) {
  return (
    <div className="content w-5 mx-auto p-10">
      <h1 className={styles.title}>Wildiney Fernando Pimentel</h1>
      <h2 className={styles.subtitle}>
        <span>Designer & Developer</span>
      </h2>
      {data &&
        data.map((button, index) => {
          const TheComponent = reacticons[button.icon];
          return (
            <ButtonPortfolio
              key={index}
              icon={<TheComponent />}
              site={button.site}
              link={button.link}
            />
          );
        })}
    </div>
  );
}
