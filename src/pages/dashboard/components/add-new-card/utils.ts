import type {CardDetails} from "@/pages/dashboard/components/add-new-card/types.ts";

function clearNumber (value = '') {
  return value.replace(/\D+/g, '')
}

export function formatCreditCardNumber (value: string): string {
  if (!value) {
    return value
  }

  const clearValue = clearNumber(value)
  const nextValue = [
    clearValue.slice(0, 4),
    clearValue.slice(4, 8),
    clearValue.slice(8, 12),
    clearValue.slice(12, 16),
  ].join(' ')

  return nextValue.trim()
}

export function formatCVC (value: string): string {
  const clearValue = clearNumber(value)
  let maxLength = 3

  return clearValue.slice(0, maxLength)
}

export function formatExpirationDate (value: string): string {
  const clearValue = clearNumber(value)

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
  }

  return clearValue
}

export const generateRandomNumber = (size: number): string => {
  let cardNumber = '';
  for (let i = 0; i < size; i++) {
    cardNumber += Math.floor(Math.random() * 10);
  }

  return cardNumber;
}

export const generateRandomExpiry = () => {
  return `0${Math.floor(Math.random() * 8) + 1}/${Math.floor(Math.random() * 10) + 24}`;
}

export const generateRandomName = () => {
  var nameList = [
    'Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','Router','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest'
  ]

  return `${nameList[Math.floor( Math.random() * nameList.length )]} ${nameList[Math.floor( Math.random() * nameList.length )]}`;
}

export const isValidCardData = (cardDetails: CardDetails): [boolean, CardDetails] => {
  const errors: CardDetails = {
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  };
  let isValid = true;

  if(clearNumber(cardDetails.number).length !== 16) {
    errors.number = 'Card number is invalid';
    isValid = false;
  }

  const nameLength = cardDetails.name.trim().length
  if(nameLength < 3 || nameLength > 50) {
    errors.name = 'Enter name between 3 and 50 characters';
    isValid = false;
  }

  const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  if(!expiryRegex.test(cardDetails.expiry)) {
    errors.expiry = 'Expiry date is invalid';
    isValid = false;
  }

  if(clearNumber(cardDetails.cvv).length !== 3) {
    errors.cvv = 'CVV is invalid';
    isValid = false;
  }

  return [isValid, errors];
}