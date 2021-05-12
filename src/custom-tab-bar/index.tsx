import { CoverView, CoverImage } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import tabs from "./tabs";
import styles from "./index.module.scss";

const CusTomTabBar = () => {
  const [currentTab, setCurrent] = useState(0);
  useEffect(() => {
    Taro.switchTab({ url: tabs[currentTab].pagePath });
  }, [currentTab]);
  return (
    <CoverView className={styles.tabWrapper}>
      <CoverView className={styles.tabBarBorder} />
      {tabs.map((tab, index) => {
        const isSelected = index === currentTab;
        return (
          <CoverView
            key={index}
            onClick={() => setCurrent(index)}
            className={styles.tabBarItem}
          >
            <CoverImage src={isSelected ? tab.selectedImage : tab.image} />
            <CoverView style={{ color: isSelected ? "#d4237a" : "#555555" }}>
              {tab.text}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default CusTomTabBar;
