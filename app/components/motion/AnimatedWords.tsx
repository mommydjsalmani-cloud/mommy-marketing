import { Fragment } from "react";
import styles from "./site-motion.module.css";

export default function AnimatedWords({ text }: { text: string }) {
  return text.split(" ").map((word, index) => (
    <Fragment key={`${index}-${word}`}>
      {index > 0 ? " " : null}
      <span className={styles.wordMask}>
        <span className={styles.word} data-motion-word>{word}</span>
      </span>
    </Fragment>
  ));
}
