import styles from "./Tab.module.scss";

export function Tab({ tabData, onUpdateTabsState }) {
  return (
    <div
      className={`${styles.tab} ${
        tabData?.isActive ? styles["tab--active"] : ""
      }`}
      onClick={() => onUpdateTabsState(tabData?.id, "isActive")}
    >
      <span className={styles.tab__text}>{tabData?.name}</span>
    </div>
  );
}
