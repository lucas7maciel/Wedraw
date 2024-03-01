import styles from "./index.module.css";

interface MultiTextProps {
  texts: Array<string>;
  direction: "upward" | "downward" | "forward" | "backward";
}

export function MultiText(props: MultiTextProps) {
  return (
    <div className="h-6 relative">
      {props.texts.map((text: string, index: number) => (
        <p className={styles.text} key={index}>
          {text}
        </p>
      ))}
    </div>
  );
}
