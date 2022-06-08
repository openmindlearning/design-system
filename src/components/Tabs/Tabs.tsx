import * as styles from "./Tabs.css";

import React from "react";

import { ClickableContentWrapper } from "../ClickableContentWrapper";

export interface Tab {
  // value to be displayed
  title: string;
  // the content to be displayed when the associated tab is selected
  content: React.ReactNode;
}

interface Props {
  tabs: Record<string, Tab>;
  selection: Tab;
  setSelection: React.Dispatch<React.SetStateAction<Tab>>;
}

export const Tabs = ({ tabs, selection, setSelection }: Props): React.ReactElement => {
  return (
    <>
      <menu className={styles.menu}>
        {Object.keys(tabs).map((tabKey) => {
          const tab = tabs[tabKey];
          const tabStyle = tab.title === selection.title ? "selected" : "unselected";
          return (
            <li key={tab.title} className={styles.li}>
              <ClickableContentWrapper
                onClick={() => setSelection(tab)}
                className={styles.tab[tabStyle]}
                dataTestId={tab.title}
              >
                {tab.title}
              </ClickableContentWrapper>
            </li>
          );
        })}
      </menu>
      {selection.content}
    </>
  );
};
