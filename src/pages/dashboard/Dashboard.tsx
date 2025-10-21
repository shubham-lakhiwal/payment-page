import Text from "@/components/text/Text.tsx";
import styles from "./Dashboard.module.scss";
import Button from "@/components/button/Button.tsx";
import AddIcon from '@/assets/icons/add.svg?react';
import TabsPanel from "@/components/tabs/TabsPanel.tsx";
import Tab from "@/components/tabs/Tab.tsx";
import SectionDebitCards from "@/pages/dashboard/components/section-debit-cards/SectionDebitCards.tsx";
import React, {useCallback, useEffect, lazy, Suspense, type LazyExoticComponent} from "react";
import {useCardsStore} from "@/domains/cards/useCardStore.ts";
import type {AddNewCardProps} from "@/pages/dashboard/components/add-new-card/types.ts";

// Lazy load the Add new card modal
const AddNewCard: LazyExoticComponent<React.FC<AddNewCardProps>>
  = lazy(() => import('@/pages/dashboard/components/add-new-card/AddNewCard.tsx'));

const Dashboard = () => {
  const [showAddCard, setShowAddCard] = React.useState(false);
  const { getAllCards } = useCardsStore()

  const toggleModal = useCallback(() => {
    setShowAddCard(prevValue => !prevValue);
  }, [])

  useEffect(() => {
    getAllCards()
  }, [])

  return <main className={`${styles.content} col-xl-9 offset-xl-3 col-lg-11 offset-lg-1 col-md-11 offset-md-1`}>
    <div className={styles.flexContent}>
      <header>
        <Text>Available Balance</Text>
        <div className={styles.mainHeader}>
          <div className={styles.balanceWrapper}>
            <div className={styles.currency}>
              <Text weight="bold">S$</Text>
            </div>
            <Text className={styles.balanceAmount}>3,000</Text>
          </div>
          <Button
            text="New Card"
            icon={AddIcon}
            onClick={toggleModal}
          />
        </div>
      </header>
      <section className={styles.section}>
        <TabsPanel>
          <Tab label={"My debit cards"}>
            <SectionDebitCards />
          </Tab>
          <Tab label={"All company cards"}>
            Nothing to show here
          </Tab>
        </TabsPanel>
      </section>
    </div>
    {showAddCard &&
      <Suspense fallback={''}>
        <AddNewCard isOpen close={toggleModal} />
      </Suspense>
    }
  </main>;
}

export default Dashboard;