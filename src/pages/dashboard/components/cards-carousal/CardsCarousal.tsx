import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from "@/organisms/card/Card.tsx";
import React from "react";
import styles from "./CardsCarousal.module.scss";
import type {cardsCarousalType} from "@/pages/dashboard/components/cards-carousal/types.ts";

const CardsCarousal: React.FC<cardsCarousalType> = ({cards}) => {
  if(!cards?.length) {
    return null
  }

  return (
    <Carousel
      className={styles.carousel}
      emulateTouch
      swipeable
      infiniteLoop
      useKeyboardArrows
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      {
         cards.map(card => <Card key={card.number} {...card} />)
      }
    </Carousel>
  )
}

export default CardsCarousal;