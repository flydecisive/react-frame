import styles from "./FrameButton.module.scss";

export function FrameButton({ text }) {
  return <div className={styles.frame_button}>{text}</div>;
}
