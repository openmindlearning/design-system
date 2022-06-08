import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { Tab, Tabs } from "./Tabs";

describe("Tabs", () => {
  const tabs: Record<string, Tab> = {
    foo: { title: "In Progress", content: <p>foo</p> },
    value: { title: "Previous", content: <p>bar</p> },
  };
  const setSelection = vi.fn();

  it("renders all provided tabs", () => {
    render(<Tabs tabs={tabs} selection={tabs.foo} setSelection={setSelection} />);

    Object.keys(tabs).forEach((tabKey) => {
      const tab = tabs[tabKey];
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it("renders the content of the selected tab", () => {
    render(<Tabs tabs={tabs} selection={tabs.foo} setSelection={setSelection} />);
    expect(screen.getByText("foo")).toBeInTheDocument();
  });

  it("fires onClick function when clicked", () => {
    render(<Tabs tabs={tabs} selection={tabs.foo} setSelection={setSelection} />);

    userEvent.click(screen.getByTestId(tabs.foo.title));
    expect(setSelection).toHaveBeenCalled();
  });
});
