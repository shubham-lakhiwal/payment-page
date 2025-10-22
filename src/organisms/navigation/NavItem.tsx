import React from "react";
import styles from "@/organisms/navigation/NavItem.module.scss";
import Text from "@/atoms/text/Text.tsx";
import type {NavItemProps} from "@/organisms/navigation/types.ts";
import {Link} from "react-router";

const NavItem: React.FC<NavItemProps> = (props) => {
  const { label, href, active, icon: Icon } = props;
  return (
    <li className={`${styles.navItem} ${active ? styles.active : ''}`}>
      <Link
        className={styles.navLink} to={href}
      >
        <Icon className={styles.navIcon} aria-label={label} />
        <Text size="large" className={`${styles.text}`}>{label}</Text>
      </Link>
    </li>
  )
}

export default NavItem;