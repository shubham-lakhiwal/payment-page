export type CardBrand = "visa" | "mastercard" | "amex";

export type CardProps = {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  brand?: CardBrand;
  masked?: boolean;
  className?: string;
};