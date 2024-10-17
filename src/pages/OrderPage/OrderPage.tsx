import { useState } from "react";
import { nanoid } from "nanoid";

import { useAppSelector } from "../../redux/hooks";

import HeroSection from "@components/HeroSection/HeroSection";
import { selectCart } from "../../redux/cart/selectors";

import {
  H2,
  ItemContainer,
  MainContainer,
  MainInfoContainer,
  sectionCart,
  TitleContainer,
  Wrapper,
} from "./OrderPage.styled";

import { containerStyles } from "@styles/variables";

import CartForm from "@components/CartForm";

import CartItemCard from "@components/CartItemCard";
import PaymentBlock from "@components/PaymentBlock";

const CartPage = () => {
  const [callMeBack, setCallMeBack] = useState(false);

  const cart = useAppSelector(selectCart);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.total_cost;
  }, 0);

  return (
    <>
      <HeroSection viewType={"other"} isEmpty={cart.length === 0}>
        Замовлення
      </HeroSection>
      <section css={sectionCart}>
        <div css={containerStyles}>
          <MainContainer>
            <MainInfoContainer>
              <ItemContainer>
                <TitleContainer>
                  <H2>Ваше замовлення</H2>
                </TitleContainer>
                <Wrapper>
                  {cart.map((item) => (
                    <CartItemCard key={nanoid()} item={item} isOrderPage />
                  ))}
                </Wrapper>
              </ItemContainer>
              <CartForm
                addedItems={cart}
                total_amount={totalPrice}
                callMeBack={callMeBack}
              />
            </MainInfoContainer>

            <PaymentBlock setCallMeBack={setCallMeBack} isOrderPage />
          </MainContainer>
        </div>
      </section>
    </>
  );
};

export default CartPage;
