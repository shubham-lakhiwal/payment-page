export type AddNewCardProps = {
  isOpen: boolean;
  close: () => void;
}

export type CardDetails = {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}