import Text from "@/atoms/text/Text.tsx";
import styles from "./Dashboard.module.scss";
import Button from "@/atoms/button/Button.tsx";
import AddIcon from '@/assets/icons/add.svg?react';
import TabsPanel from "@/organisms/tabs/TabsPanel.tsx";
import Tab from "@/organisms/tabs/Tab.tsx";
import SectionDebitCards from "@/pages/dashboard/components/section-debit-cards/SectionDebitCards.tsx";
import React, {useCallback, useEffect, lazy, Suspense, type LazyExoticComponent} from "react";
import {useCardsStore} from "@/domains/cards/useCardStore.ts";
import type {AddNewCardProps} from "@/organisms/form-add-new-card/types.ts";
import LogoSm from '@/assets/icons/logo-sm.svg?react';
import {toast} from "react-toastify";
import type {CardDetailsType} from "@/domains/cards/types.ts";
import {Link} from "react-router";

// Lazy load the Add new card modal
const FormAddNewCard: LazyExoticComponent<React.FC<AddNewCardProps>>
  = lazy(() => import('@/organisms/form-add-new-card/FormAddNewCard.tsx'));

const Dashboard = () => {
  const [showAddCard, setShowAddCard] = React.useState(false);
  const { addNewCard, loading, getAllCards } = useCardsStore()

  const toggleModal = useCallback(() => {
    setShowAddCard(prevValue => !prevValue);
  }, [])

  useEffect(() => {
    getAllCards()
  }, [])

  const handleSubmitCard = useCallback((cardDetails: CardDetailsType) => {
    addNewCard(cardDetails)
      .then(() => {
        toast.success('New Card has been added succesfully')
      }).catch(err => {
      console.error(err)
      toast.error(err?.message || 'Error adding new card');
    }).finally(toggleModal)
  }, [])

  return <main className={`${styles.content} col-xl-9 offset-xl-3 col-lg-11 offset-lg-1 col-md-11 offset-md-1 col-sm-11 offset-sm-1 col-xs-12 offset-xs-0`}>
    <div className="container">
      <header className={styles.header}>
        <Link className={styles.logoSm} to="/">
          <LogoSm />
        </Link>
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
            className={styles.addCardButton}
          />
        </div>
      </header>
      <section className={styles.section}>
        <TabsPanel>
          <Tab label={"My debit cards"}>
            <SectionDebitCards />
          </Tab>
          <Tab className={styles.noData} label={"All company cards"} >
            Nothing to show here
          </Tab>
        </TabsPanel>
      </section>
    </div>
    {showAddCard &&
      <Suspense fallback={''}>
        <FormAddNewCard isOpen close={toggleModal} loading={loading} submitCard={handleSubmitCard} />
      </Suspense>
    }
  </main>;
}

export default Dashboard;