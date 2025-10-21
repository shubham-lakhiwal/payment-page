import CardsCarousal from "@/pages/dashboard/components/cards-carousal/CardsCarousal.tsx";
import styles from './SectionDebitCards.module.scss';
import Text from "@/components/text/Text.tsx";
import EyeIcon from '@/assets/icons/eye.svg?react';
import CardsCta from "@/pages/dashboard/components/cards-cta/CardsCta.tsx";
import Collapsible from "@/components/collapsible/Collapsible.tsx";
import TransactionIcon from "@/assets/icons/transactions.svg?react";
import CardDetailsIcon from "@/assets/icons/card-details.svg?react";
import Transactions from "@/pages/dashboard/components/transactions/Transactions.tsx";
import {useCardsStore} from "@/domains/cards/useCardStore.ts";

const SectionDebitCards = () => {
  const { cards } = useCardsStore()

  return <div className={styles.myCardsWrapper}>
    <div className="col-md-6">
      <div className={styles.cardsWrapper}>
        <div className={styles.visibilityCtaWrapper}>
          <EyeIcon />
          <Text className={styles.visibilityCta} weight="bold" size="small">
            Show card number
          </Text>
        </div>
        {cards ? <CardsCarousal cards={cards} /> : ''}
      </div>
      <div className={styles.cardsCtaWrapper}>
        <CardsCta />
      </div>
    </div>
    <div className={`col-md-6 ${styles.transactionsWrapper}`}>
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