import CardsCarousal from "@/pages/dashboard/components/cards-carousal/CardsCarousal.tsx";
import styles from './SectionDebitCards.module.scss';
import Text from "@/atoms/text/Text.tsx";
import EyeIcon from '@/assets/icons/eye.svg?react';
import CardsCta from "@/pages/dashboard/components/cards-cta/CardsCta.tsx";
import Collapsible from "@/molecules/collapsible/Collapsible.tsx";
import TransactionIcon from "@/assets/icons/transactions.svg?react";
import CardDetailsIcon from "@/assets/icons/card-details.svg?react";
import Transactions from "@/pages/dashboard/components/transactions/Transactions.tsx";
import {useCardsStore} from "@/domains/cards/useCardStore.ts";
import Button from "@/atoms/button/Button.tsx";

const SectionDebitCards = () => {
  const { cards } = useCardsStore()

  return <div className={`${styles.myCardsWrapper} row`}>
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <div className={styles.cardsWrapper}>
        <div className={styles.visibilityCtaWrapper}>
          <Button className={styles.visibilityCta}>
            <EyeIcon />
            <Text weight="bold" size="small" className={styles.visibilityCtaText}>
              Show card number
            </Text>
          </Button>
        </div>
        {cards ? <CardsCarousal cards={cards} /> : ''}
      </div>
      <div className={styles.cardsCtaWrapper}>
        <CardsCta />
      </div>
    </div>
    <div className={`col-xl-6 col-lg-6 col-md-12 col-sm-12 ${styles.transactionsWrapper}`}>
      <Collapsible heading={"Card details"} icon={CardDetailsIcon}>
        <Text>Nothing here</Text>
      </Collapsible>
      <Collapsible isOpen heading={"Recent transactions"} icon={TransactionIcon}>
        <Transactions />
      </Collapsible>
    </div>
  </div>
}

export default SectionDebitCards;