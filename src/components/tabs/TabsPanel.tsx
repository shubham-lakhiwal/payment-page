import React, {type ReactElement, useState} from 'react';
import styles from './TabsPanel.module.scss';
import type {TabProps, TabsPanelType} from "@/components/tabs/types.ts";
import Button from "@/components/button/Button.tsx";

const TabsPanel: React.FC<TabsPanelType> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab index

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHeaders}>
        {React.Children.map(children, (child: React.ReactNode, index) => (
          <Button
            variant="tertiary"
            text={((child as ReactElement).props as TabProps)?.label || ''}
            key={index}
            className={`${styles.tabButton} ${index === activeTab ? styles.active : ''}`}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className={styles.tabContent}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`tab-pane ${index === activeTab ? 'active' : ''}`}
            style={{ display: index === activeTab ? 'block' : 'none' }}
          >
            {child || null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsPanel;