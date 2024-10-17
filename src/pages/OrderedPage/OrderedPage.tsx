import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@redux/hooks";

import { clearCart } from "@redux/cart/slice";
import { containerStyles } from "@styles/variables";
import { linkStyle, sectionStyle } from "./OrderedPage.styled";

const OrderedPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const order_id = searchParams.get("order_id");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch, order_id]);

  return (
    <section css={sectionStyle}>
      <div css={containerStyles}>
        <h1>Дякуємо за замовлення!</h1>
        <p>{`Всі деталі будуть відправлені вам на пошту: ${email}`} </p>
        <p>
          Якщо ви не побачите листа у папці "Вхідні", будь ласка, перевірте
          папки "Спам", "Промоакції" або інші папки. Іноді електронні листи
          можуть бути помилково переміщені туди.
        </p>
        <Link to="/store" css={linkStyle}>
          Продовжити покупки
        </Link>
      </div>
    </section>
  );
};

export default OrderedPage;
