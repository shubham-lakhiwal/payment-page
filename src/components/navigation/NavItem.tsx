import React from "react";
import styles from "@/components/navigation/NavItem.module.scss";
import Text from "@/components/text/Text.tsx";
import type {NavItemProps} from "@/components/navigation/types.ts";

const NavItem: React.FC<NavItemProps> = (props) => {
  const { label, href, active, icon: Icon } = props;
  return (
    <li className={`${styles.navItem} ${active ? styles.active : ''}`}>
      <a
        className={styles.navLink} href={href}
      >
        <Icon className={styles.navIcon} aria-label={label} />
        <Text size="large">{label}</Text>
      </a>
    </li>
  )
}

export default NavItem;