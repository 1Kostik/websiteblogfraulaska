import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBoxContainer,
  EndPrice,
  InfoPaymentContainer,
  InfoPrice,
  InfoWrapperPayment,
  Line,
  PaymentContainer,
  TitleInfo,
  TitlePayment,
  WrapperTitle,
} from "./PaymentBlock.styled";

import { useAppSelector } from "@redux/hooks";
import { selectCart, selectCartTotalQuantity } from "@redux/cart/selectors";

interface IPaymentBlockProps {
  setCallMeBack?: React.Dispatch<React.SetStateAction<boolean>>;
  isOrderPage?: boolean;
}

const PaymentBlock: React.FC<IPaymentBlockProps> = ({
  setCallMeBack,
  isOrderPage,
}) => {
  const navigate = useNavigate();
  const totalQuantity = useAppSelector(selectCartTotalQuantity);
  const cart = useAppSelector(selectCart);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.total_cost;
  }, 0);

  return (
    <PaymentContainer>
      <TitlePayment>Разом</TitlePayment>
      <InfoPaymentContainer>
        <TitleInfo>
          {totalQuantity}{" "}
          {totalQuantity === 1
            ? "товар"
            : totalQuantity > 1 && totalQuantity < 5
            ? "товари"
            : "товарів"}{" "}
          на суму:
        </TitleInfo>{" "}
        <InfoPrice>{totalPrice} ₴</InfoPrice>
      </InfoPaymentContainer>
      <Line />
      <InfoWrapperPayment>
        <WrapperTitle>До сплати:</WrapperTitle>{" "}
        <EndPrice>{totalPrice} ₴</EndPrice>
      </InfoWrapperPayment>

      {setCallMeBack && (
        <CheckBoxContainer>
          <input type="checkbox" id="callMeBack" className="hiddenInput" />
          <label
            htmlFor="callMeBack"
            onClick={() => setCallMeBack((prev) => !prev)}
          >
            Передзвоніть мені для підтвердження
          </label>
        </CheckBoxContainer>
      )}

      {isOrderPage ? (
        <Button type="submit" form="orderForm">
          Оформити замовлення
        </Button>
      ) : (
        <Button type="submit" onClick={() => navigate("/order")}>
          Перейти до замовлення
        </Button>
      )}
    </PaymentContainer>
  );
};

export default PaymentBlock;
