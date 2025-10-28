import { useState } from "react";
import "./App.css";
import { FrameContainer } from "./components/FrameContainer/FrameContainer";
import { FrameIcon } from "./components/imgs/FrameIcon";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";

function App() {
  const [isFrameOpen, setIsFrameOpen] = useState(false);
  const [rightPanelWidth, setRightPanelWidth] = useState(600);

  return (
    <>
      <div className="header">
        ###### Клиент
        <div className="header__icons">
          <div
            className={`header__button ${
              isFrameOpen ? "header__button--active" : ""
            }`}
            onClick={() => setIsFrameOpen(!isFrameOpen)}
          >
            <FrameIcon />
          </div>
        </div>
      </div>
      <div
        className={`content ${isFrameOpen ? "content--frame" : ""}`}
        style={{
          gridTemplateColumns: isFrameOpen
            ? `1fr ${rightPanelWidth}px`
            : "1fr 0fr",
        }}
      >
        <div className="chats">
          <ControlPanel />
          <p>тут типа чаты</p>
        </div>
        <FrameContainer
          isFrameOpen={isFrameOpen}
          width={rightPanelWidth}
          onWidthChange={setRightPanelWidth}
        ></FrameContainer>
      </div>
    </>
  );
}

export default App;
