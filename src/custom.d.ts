declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string, titleId?: string, desc?: string, descId?: string }
  >;

  export default ReactComponent;
}


declare module "*.module.css" {
  export const text: string
  export const styles: Record<string, string>
}