// Write your code here

import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  DetailsContainer,
  CardNumberInput,
  CardNameInput,
  CardHolderNumber,
  CardHolderName,
  PaymentMethodHeading,
  CardHeading,
  CardHolderNameHeading,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardName(event.target.value.toUpperCase())
  }

  return (
    <AppContainer>
      <CardContainer data-testid="creditCard">
        <CardHeading>CREDIT CARD</CardHeading>
        <CardHolderNumber>{cardNumber}</CardHolderNumber>
        <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
        <CardHolderName>{cardName}</CardHolderName>
      </CardContainer>
      <DetailsContainer>
        <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
        <CardNumberInput
          type="text"
          value={cardNumber}
          onChange={onChangeCardNumber}
          placeholder="Card Number"
        />

        <CardNameInput
          type="text"
          value={cardName}
          onChange={onChangeCardName}
          placeholder="Cardholder Name"
        />
      </DetailsContainer>
    </AppContainer>
  )
}

export default CreditCard
