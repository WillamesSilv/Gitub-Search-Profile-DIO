import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs) `
  font-size: 16px;
  width: 100%;
  margin-top: 25px;
`;

export const WrapperTabList = styled(TabList) `
  list-style-type: none;
  padding: 4px 4px 4px 0;
  display: flex;
  margin: 0;
  font-weight: 500;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab) `
  border-radius: 3px;
  border: 1px solid #CCC;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  

  &:focus {
    outline: none;
  }

  &.is-selected{
    border-bottom: 1px solid white;
  }
`;
WrapperTab.tabsRole = "Tab";


export const WrapperTabPanel = styled(TabPanel) `
  display: none;
  min-height: 40vh;
  padding: 8px;
  margin-top: -5px;
  border: 1px solid #CCC;
  border-radius: 3px;

  &.is-selected {
    display: block;
    border-top-left-radius: 0;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";
