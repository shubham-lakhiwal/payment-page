import React from "react";

export type NavItemProps = {
  id: string;
  label: string;
  href: string;
  active?: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}