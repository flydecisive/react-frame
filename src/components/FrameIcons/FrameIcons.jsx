import styles from "./FrameIcons.style.scss";

export function FrameIcons() {
  return (
    <div className={styles.frame_icons}>
      <div className={styles.frame_icons__portrait}></div>
      <div className={styles.frame_icons__all}></div>
    </div>
  );
}
