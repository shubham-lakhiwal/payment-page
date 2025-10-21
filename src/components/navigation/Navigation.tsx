import Logo from '@/assets/icons/logo.svg?react';
import Text from "../text/Text";
import React from 'react';
import styles from './Navigation.module.scss';
import NavItem from "@/components/navigation/NavItem.tsx";
import {NAV_ITEMS} from "@/components/navigation/constants.ts";

const Navigation: React.FC = () => {
  return (
    <div className={`col-xl-3 col-md-1 ${styles.leftSidebar}`}>
      <div>
        <Logo className={styles.logo} />
        <Text className={styles.tagline}>Trusted way of banking for 3,000+ SMEs and startups in Singapore</Text>
      </div>
      <nav>
        <ul className={styles.navigation}>
          {
            NAV_ITEMS.map((item) => <NavItem key={item.id} {...item} />)
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;