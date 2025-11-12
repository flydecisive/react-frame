import styles from "./Spliter.module.scss";
import { SpliterIcon } from "../imgs/SpliterIcon.jsx";
import { useCallback, useRef, useEffect, useContext } from "react";
import { FrameContext } from "../../contexts/FrameContext.jsx";

export function Spliter({ handleResizing }) {
  const isResizing = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const { setFrameWidth } = useContext(FrameContext);

  const handleMouseDown = useCallback((e) => {
    isResizing.current = true;
    startX.current = e.clientX;

    const frameElement = e.target.closest(".frame");
    startWidth.current = frameElement ? frameElement.offsetWidth : 600;

    // document.body.classList.add("resizing");
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isResizing.current) return;

      const deltaX = e.clientX - startX.current;
      const newWidth = Math.max(400, startWidth.current - deltaX);

      handleResizing(newWidth);
      setFrameWidth(newWidth);
    },
    [handleResizing]
  );

  const handleMouseUp = useCallback(() => {
    if (isResizing.current) {
      isResizing.current = false;
      // document.body.classList.remove("resizing");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className={styles.spliter} onMouseDown={handleMouseDown}>
      <SpliterIcon />
    </div>
  );
}
