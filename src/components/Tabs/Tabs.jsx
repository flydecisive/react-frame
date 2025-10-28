import { useState } from "react";
import styles from "./Tabs.module.scss";
import { Tab } from "../Tab/Tab";

export function Tabs() {
  const [tabs, setTabs] = useState([
    { id: "info", name: "Информация", isActive: true },
    { id: "detail", name: "Подробно", isActive: false },
    { id: "appeals", name: "Обращения", isActive: false },
    { id: "bugs", name: "Баги", isActive: false },
    { id: "installations", name: "Установленные экземпляры", isActive: false },
  ]);

  const updateTabState = (id, field) => {
    setTabs((prevTabs) => {
      const newTabs = prevTabs.map((tab) => {
        return tab.id === id
          ? { ...tab, [field]: true }
          : { ...tab, [field]: false };
      });
      return newTabs;
    });
  };

  return (
    <div className={styles.tabs}>
      {tabs?.map((tab) => (
        <Tab key={tab?.id} tabData={tab} onUpdateTabsState={updateTabState} />
      ))}
    </div>
  );
}
