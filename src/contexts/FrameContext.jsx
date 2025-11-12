import { createContext, useState } from "react";

const FrameContext = createContext();

export const FrameProvider = ({ children }) => {
  const [frameWidth, setFrameWidth] = useState(600);
  const [isFrameOpen, setIsFrameOpen] = useState(false);

  const value = {
    frameWidth,
    isFrameOpen,
    setFrameWidth,
    setIsFrameOpen,
  };

  return (
    <FrameContext.Provider value={value}>{children}</FrameContext.Provider>
  );
};

export { FrameContext };
