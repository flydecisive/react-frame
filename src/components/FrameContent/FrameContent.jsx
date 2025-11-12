import styles from "./FrameContent.module.scss";
import { useContext } from "react";
import { Tabs } from "../Tabs/Tabs";
import { frameButtons } from "../../data/frameButtons";
import { FrameButton } from "../FrameButton/FrameButton";
import { FrameContext } from "../../contexts/FrameContext";

export function FrameContent() {
  const { frameWidth } = useContext(FrameContext);

  return (
    <div className={styles.frame_content}>
      <Tabs />
      <div className={styles.frame_content__wrapper}>
        <div
          className={styles.frame__buttons}
          style={{
            flexFlow: frameWidth > 800 ? "row nowrap" : "",
          }}
        >
          {frameButtons.map((frameButton) => {
            return <FrameButton key={frameButton.id} text={frameButton.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
