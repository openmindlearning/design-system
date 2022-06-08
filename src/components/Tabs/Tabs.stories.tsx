import React, { ReactElement, useState } from "react";
import { ComponentMeta } from "@storybook/react";

import { Tab, Tabs } from "./Tabs";

export default {
  title: "Design System/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default = (): ReactElement => {
  const tabs = {
    foo: {
      title: "Foo",
      content: (
        <>
          <h1>Foo</h1>
          <p>Usually accompanied by bar, is used by developers in examples</p>
        </>
      ),
    },
    bar: {
      title: "Bar",
      content: (
        <>
          <h1>Bar</h1>
          <p>Three men walk into a bar, you'd think the last one would have seen it coming</p>
        </>
      ),
    },
  };
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs.foo);

  return <Tabs tabs={tabs} selection={selectedTab} setSelection={setSelectedTab} />;
};
