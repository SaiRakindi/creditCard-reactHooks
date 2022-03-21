// Write your code here

import {useState} from 'react'

import {
  AppContainer,
  CreditCardHeadingContainer,
  HorizontalLine,
  CardContainer,
  PaymentContainer,
  CreditCardDetailsContainer,
  Card,
  PaymentMethodContainer,
  PaymentMethodInput,
  CardHolderNumber,
  CardHolderName,
  PaymentMethodHeading,
  CardHeading,
  CardHolderNameHeading,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')

  const cardholderNameUpperCase = cardholderName.toUpperCase()

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardholderName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CardHeading>CREDIT CARD</CardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardHolderNumber>{cardNumber}</CardHolderNumber>
            <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
            <CardHolderName>{cardholderName}</CardHolderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <PaymentMethodInput
            type="text"
            value={cardNumber}
            onChange={onChangeCardNumber}
            placeholder="Card Number"
          />

          <PaymentMethodInput
            type="text"
            value={cardholderNameUpperCase}
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </AppContainer>
  )
}

export default CreditCard
