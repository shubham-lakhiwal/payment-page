import type {CardDetailsType} from "@/domains/cards/types.ts";

export type AddNewCardProps = {
  isOpen: boolean;
  close: () => void;
  submitCard: (cardDetails: CardDetailsType) => void
  loading?: boolean;
}

export type CardDetails = {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}