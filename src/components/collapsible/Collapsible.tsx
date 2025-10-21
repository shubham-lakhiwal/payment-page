import styles from "./Collapsible.module.scss";
import type {CollapsibleProps} from "@/components/collapsible/types.ts";
import Text from "@/components/text/Text.tsx";
import React, {useCallback, useState} from "react";
import ArrowIcon from '@/assets/icons/down-arrow.svg?react';

const Collapsible: React.FC<CollapsibleProps> = ({
  heading = 'Recent transactions',
  icon,
  isOpen = false,
  children
}) => {
  const [open, setOpen] = useState(isOpen);
  const Icon = icon as React.ComponentType<React.SVGProps<SVGSVGElement>>

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open])

  return (
    <div className={`${styles.wrapper} ${open ? styles.expanded : ''}`}>
      <div className={styles.header} onClick={toggleOpen} >
        <Icon />
        <Text>{heading}</Text>
        <ArrowIcon className={styles.arrowIcon} />
      </div>
      <div className={`${styles.body}`} >
        {children}
      </div>
    </div>
  )
}

export default Collapsible;