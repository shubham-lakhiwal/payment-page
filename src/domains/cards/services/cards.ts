import type {CardDetailsDTO} from "../types.ts";

const SAMPLE_CARDS: CardDetailsDTO[] = [
  {
    name: 'Mark Henry',
    expiry: '08/30',
    number: '5234567898765432',
    cvv: '123',
    brand: 'mastercard',
  },
  {
    name: 'Miquel Ramio',
    expiry: '02/31',
    number: '4834227898005431',
    cvv: '456',
    brand: 'visa',
  },
  {
    name: 'Jose Esteban',
    expiry: '05/28',
    number: '5834777834005455',
    cvv: '456',
    brand: 'amex'
  }
]

const getStoredCards = (): CardDetailsDTO[] => {
  const item: string | null = window.localStorage.getItem('cards');
  let storedCards: CardDetailsDTO[] = [];
  if(item) {
    storedCards = JSON.parse(item)
  }
  return storedCards;
}

export const fetchAllCards: () => Promise<CardDetailsDTO[]> = async () =>
  Promise.resolve([...SAMPLE_CARDS, ...getStoredCards()])

export const saveNewCard: (card: CardDetailsDTO) => Promise<void> = async (card) => {
  return new Promise((resolve) => {
    const existingCards = getStoredCards();
    existingCards.push(card);
    window.localStorage.setItem('cards', JSON.stringify(existingCards));
    resolve()
  })
}