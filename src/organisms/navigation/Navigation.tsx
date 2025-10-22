import Logo from '@/assets/icons/logo.svg?react';
import LogoSm from '@/assets/icons/logo-sm.svg?react';
import Text from "@/atoms/text/Text.tsx";
import React from 'react';
import styles from './Navigation.module.scss';
import NavItem from "@/organisms/navigation/NavItem.tsx";
import {NAV_ITEMS} from "@/organisms/navigation/constants.ts";
import {Link} from "react-router";

const Navigation: React.FC = () => {
  return (
    <>
      <div className={`col-xl-3 col-lg-1 col-md-1 col-sm-1 ${styles.leftSidebar} hide-xs`}>
        <div>
          <Link to="/">
            <Logo className={`${styles.logo} hide-lg`} />
            <LogoSm className={`${styles.logo} hide-xl`} />
          </Link>
          <Text className={`${styles.tagline} hide-lg`}>Trusted way of banking for 3,000+ SMEs and startups in Singapore</Text>
        </div>
        <nav>
          <ul className={styles.navigation}>
            {
              NAV_ITEMS.map((item) => <NavItem key={item.id} {...item} />)
            }
          </ul>
        </nav>
      </div>
      <div className={styles.bottomMenu}>
        <nav>
          <ul className={styles.navigation}>
            {
              NAV_ITEMS.map((item) => <NavItem key={item.id} {...item} />)
            }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation;