import styles from "./FrameContent.module.scss";
import { Tabs } from "../Tabs/Tabs";

export function FrameContent() {
  return (
    <div className={styles.frame_content}>
      <Tabs />
    </div>
  );
}
