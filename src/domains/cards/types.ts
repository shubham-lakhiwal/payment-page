export type CardBrand = "visa" | "mastercard" | "amex";

export type CardDetailsDTO = {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  brand?: CardBrand;
  masked?: boolean;
  className?: string;
};

export type CardDetailsType = {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  brand?: CardBrand;
}