import Input from "@/atoms/input/Input.tsx";
import Modal from "@/organisms/modal/Modal.tsx";
import React, {useState} from "react";
import type {AddNewCardProps, CardDetails} from "./types.ts";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  generateRandomNumber,
  generateRandomExpiry,
  generateRandomName,
  isValidCardData
} from "./utils.ts";
import Button from "@/atoms/button/Button.tsx";
import styles from "./FormAddNewCard.module.scss";

const AddNewCard: React.FC<AddNewCardProps> = ({
    isOpen,
    close,
    loading = false,
    submitCard
  }) => {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    number: formatCreditCardNumber(generateRandomNumber(16)),
    name: generateRandomName(),
    expiry: formatExpirationDate(generateRandomExpiry()),
    cvv: generateRandomNumber(3),
  });

  const [cardErrors, setCardErrors] = useState<CardDetails>({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
    const target = $event.target;
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvv") {
      target.value = formatCVC(target.value);
    }
    setCardErrors({...cardErrors, [target.name]: ''});
    setCardDetails({ ...cardDetails, [target.name]: target.value });
  };

  const saveNewCard = ($event: React.FormEvent) => {
    $event.preventDefault()
    const [isValid, cardErrors] = isValidCardData(cardDetails);
    if(!isValid) {
      setCardErrors(cardErrors)
      return
    }

    submitCard(cardDetails)
  }

  return (
    <Modal title="Add new Card" isOpen={isOpen} onClose={close}>
      <form onSubmit={saveNewCard}>
        <Input label="Name on card" name="name" onChange={handleInputChange} value={cardDetails.name} error={cardErrors.name} />
        <Input label="Card number" name="number" onChange={handleInputChange} value={cardDetails.number} error={cardErrors.number} />
        <Input label="Expiry" name="expiry" onChange={handleInputChange} value={cardDetails.expiry} error={cardErrors.expiry} />
        <Input label="CVV" name="cvv" onChange={handleInputChange} value={cardDetails.cvv} error={cardErrors.cvv} />
        <Button className={styles.buttonSubmit} text={loading ? 'Loading...' : 'Add Card'} disabled={loading} type="submit" />
      </form>
    </Modal>
  )
}

export default AddNewCard;