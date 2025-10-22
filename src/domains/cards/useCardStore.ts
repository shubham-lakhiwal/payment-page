import { create } from "zustand";
import type {CardDetailsDTO, CardDetailsType} from "@/domains/cards/types.ts";
import {fetchAllCards, saveNewCard} from "@/domains/cards/services/cards.ts";

interface CardStoreType {
  cards: CardDetailsType[];
  loading: boolean;
  addNewCard: (card:CardDetailsType) => Promise<void>;
  getAllCards: () => Promise<void>;
}

const mapCardDataFromDTO = (cards: CardDetailsDTO[]): CardDetailsType[] => {
  return cards.map(card => ({
    brand: card.brand,
    cvv: card.cvv,
    expiry: card.expiry,
    name: card.name,
    number: card.number,
  }))
}

const mapCardDTOFromData= (card: CardDetailsType): CardDetailsDTO => ({
  name: card.name,
  number: card.number,
  expiry: card.expiry,
  cvv: card.cvv,
  brand: 'visa',
})

export const useCardsStore = create<CardStoreType>((set, get) => ({
  cards: [],
  loading: false,
  addNewCard: async (card:CardDetailsType): Promise<void> => {
    const postDate = {...card, number: card.number.replace(/ /g, '')}
    await saveNewCard(mapCardDTOFromData(postDate))
    await get().getAllCards()
  },
  getAllCards: async (): Promise<void> => {
    set({loading: true})
    const response: CardDetailsDTO[] = await fetchAllCards()
    set({cards: mapCardDataFromDTO(response), loading: false})
  }
}));