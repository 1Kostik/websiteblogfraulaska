import { Product } from "Interfaces/Product";
import React from "react";

interface Props {
  item: Product;
}

const OrderItemCard: React.FC<Props> = ({ item }) => {
  const { imageUrls, title, product_code, variations } = item;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
        }}
      >
        <img src={imageUrls[0].img_url} alt="" />
      </div>
      <div>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Назва продукту: {title}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Код продукту: {product_code}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Повна ціна: {variations[0].price}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Скидка: {variations[0].discount}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Ціна зі скидкою:{" "}
          {Math.round(
            variations[0].price -
              ((variations[0].price * (variations[0].discount || 0)) / 100) *
                variations[0].count
          )}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Кількість: {variations[0].count}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Колір: {variations[0].color}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Об'єм: {variations[0].size}
        </p>
      </div>
    </div>
  );
};

export default OrderItemCard;
