import React from 'react';
import type {TabProps} from "@/organisms/tabs/types.ts";

const Tab: React.FC<TabProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
};

export default Tab;