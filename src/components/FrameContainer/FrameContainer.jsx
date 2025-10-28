// import styles from "./FrameContainer.module.scss";
import { FrameContent } from "../FrameContent/FrameContent";
import { Spliter } from "../Spliter/Spliter";

export function FrameContainer({ isFrameOpen, width, onWidthChange }) {
  if (!isFrameOpen) return null;

  return (
    <div className="frame" style={{ width: `${width}px` }}>
      <Spliter handleResizing={onWidthChange} />
      <div className="frame__wrapper">
        <FrameContent />
      </div>
    </div>
  );
}
