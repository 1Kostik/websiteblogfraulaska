import {
  deleteOrder,
  getOrderById,
  getProductById,
  updateOrder,
  updateProductCountDecrease,
  updateProductCountIncrease,
} from "@services/servicesApi";
import { containerStyles } from "@styles/variables";
import { IOrder } from "Interfaces/IOrder";
import { Product } from "Interfaces/Product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import {
  btnBack,
  btnDelete,
  description,
  infoContainer,
  infoWrapper,
  infoWrapperBtn,
  itemsContainer,
  title,
  titleContainer,
  titleH2,
  totalAmount,
  wrapper,
} from "./OrderItemPage.styled";
import CartItemCard from "@components/CartItemCard";
import { nanoid } from "nanoid";
import SortingItems from "@components/SortingItems/SortingItems";
import Modal from "@components/Modal";
import StatusWarningModal from "@components/StatusWarningModal/StatusWarningModal";
import { createPortal } from "react-dom";
import { formatDate } from "@utils/formatDate";
import { useCheckTokenExpiration } from "@hooks/useCheckTokenExpiration";

const modalPortal = document.querySelector("#portal-root");

const OrderItemPage = () => {
  const checkExpiration = useCheckTokenExpiration();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<IOrder>();
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [previousProductIds, setPreviousProductIds] = useState<number[]>([]);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [disableOrder, setDisableOrder] = useState<boolean>(false);

  const optionsPayment =
    data?.payment_status === "Сплачено"
      ? ["Сплачено"]
      : ["В очікуванні", "Сплачено"];
  const optionStatus =
    data?.status === "Відправлено"
      ? ["Відправлено"]
      : data?.status === "Відхилено"
      ? ["Відхилено"]
      : ["В очікуванні", "Відправлено", "Відхилено"];

  useEffect(() => {
    checkExpiration();
    async function fetchOrder(id: number) {
      const result = await getOrderById(id);
      setData(result);
    }

    if (id) {
      fetchOrder(+id);
    }
  }, [id]);

  useEffect(() => {
    const productIdArray: number[] =
      data?.order_items.map((item) => Number(item.product_id)) ?? [];
    async function fetchOrderProducts() {
      if (data) {
        const fetchedProducts = await Promise.all(
          productIdArray.map((productId) => getProductById(productId))
        );
        setOrderProducts(fetchedProducts);
      }
    }

    if (productIdArray.length > 0) {
      const arraysAreEqual =
        previousProductIds.length === productIdArray.length &&
        previousProductIds.every(
          (value, index) => value === productIdArray[index]
        );

      if (!arraysAreEqual) {
        fetchOrderProducts();
        setPreviousProductIds(productIdArray);
      }
    }
  }, [data, previousProductIds]);

  const productsForRender = orderProducts
    .map((item) => {
      const orderItem = data?.order_items.find(
        (orderItem) => orderItem.product_id === item.id
      );
      if (orderItem) {
        const variations = item.variations.filter((variation) => {
          const sizeMatch = orderItem.size
            ? String(variation.size) === String(orderItem.size)
            : true;
          const colorMatch = orderItem.color
            ? String(variation.color).toLowerCase() ===
              String(orderItem.color).toLowerCase()
            : true;

          return sizeMatch && colorMatch;
        });

        return {
          product_id: item.id,
          title: item.title,
          img: item.imageUrls[0],
          product_code: orderItem.product_id,
          size: orderItem.size,
          discount: variations[0].discount ?? null,
          price: variations[0].price ?? null,
          count: orderItem.count,
          color: orderItem.color,
          total_cost: orderItem.total_cost,
          quantity: orderItem.count,
          variation_id: variations[0].id,
        };
      }
      return null;
    })
    .filter((product) => product !== null);
  const variation_ids = productsForRender.map((item) => {
    return { id: item!.variation_id, count: item!.quantity };
  });
  useEffect(() => {
    async function IncreaseCountProduct(id: number, count: number) {
      await updateProductCountIncrease(id, count);
    }
    if (variation_ids.length > 0 && status === "Відхилено" && isModalOpen)
      variation_ids.forEach((item) => {
        IncreaseCountProduct(item!.id, item!.count);
      });
  }, [variation_ids, status, isModalOpen]);

  useEffect(() => {
    async function DecreaseCountProduct(id: number, count: number) {
      await updateProductCountDecrease(id, count);
    }
    if (
      variation_ids.length > 0 &&
      status === "Відправлено" &&
      data?.status !== "Відправлено"
    ) {
      variation_ids.forEach((item) => {
        DecreaseCountProduct(item.id, item.count);
      });
    }
  }, [variation_ids, status, data?.status]);

  useEffect(() => {
    if (data?.status === "Відхилено" || data?.status === "Відправлено") {
      setDisableOrder(true);
    }
  }, [data?.status]);

  useEffect(() => {
    if (status === "Відправлено") {
      setDisableOrder(true);
    }
  }, [status]);

  async function updateStatus(orderId: number, status: string) {
    await updateOrder(orderId, status);
  }
  const handleUpdateStatus = (id: number) => {
    if (id && status === "Відхилено") {
      setDisableOrder(true);
      updateStatus(id, status);
      navigate(-1);
    }
  };
  const handleDelete = async (id: number) => {
    await deleteOrder(id);
    navigate(-1);
  };
  return (
    <section style={{ height: "100vh", width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <div css={titleContainer}>
          <button css={btnBack} onClick={() => navigate(-1)}>
            <IoMdArrowBack />
          </button>
          <h1 css={title}>
            Замовлення # {id} від {data && formatDate(data!.order_date)}
          </h1>
        </div>
        <div css={wrapper}>
          <div css={infoContainer}>
            {data && (
              <>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Замовник:</h2>
                  <p css={description}>
                    {data.last_name} {data.name}
                  </p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Контакти:</h2>
                  <p css={description}>{data.phone}</p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Спосіб оплати:</h2>
                  <p css={description}>{data.payment_method}</p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Спосіб доставки:</h2>
                  <p css={description}>{data.delivery_type}</p>
                </div>
                {data.delivery_type !== "Самовивіз" && (
                  <>
                    <div css={infoWrapper}>
                      <h2 css={titleH2}>Адреса:</h2>
                      <p css={description}>{data.delivery_city}</p>
                    </div>
                    <div css={infoWrapper}>
                      <h2 css={titleH2}>Відділення/поштомат:</h2>
                      <p css={description}>{data.delivery_destination}</p>
                    </div>
                  </>
                )}
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Статус оплати:</h2>
                  <div css={description}>
                    {" "}
                    <SortingItems<string>
                      idOrders={data.id}
                      options={optionsPayment}
                      width={"127px"}
                      widthTagP={"60%"}
                      widthContainer={"120px"}
                      height={"auto"}
                      border={"unset"}
                      padding={"unset"}
                      borderRadius={"12px"}
                      justifyContent={"center"}
                      backGround={"var(--bg-light-grey)"}
                      color={"var(--text-black)"}
                      fontSize={"12px"}
                      top={"30px"}
                      gap={"8px"}
                      setSelectedOption={setPaymentStatus}
                      selectedOption={paymentStatus}
                      disable={
                        paymentStatus === "Сплачено"
                          ? true
                          : status === "Відправлено"
                          ? false
                          : disableOrder
                      }
                    />
                  </div>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Статус замовлення:</h2>
                  <div css={description}>
                    {" "}
                    <SortingItems<string>
                      idOrders={data.id}
                      options={optionStatus}
                      width={"127px"}
                      widthTagP={"60%"}
                      widthContainer={"120px"}
                      height={"auto"}
                      border={"unset"}
                      padding={"unset"}
                      borderRadius={"12px"}
                      backGround={"var(--bg-light-grey)"}
                      color={"var(--text-black)"}
                      justifyContent={"center"}
                      fontSize={"12px"}
                      top={"30px"}
                      gap={"8px"}
                      disable={disableOrder}
                      setIsOpenModal={setIsModalOpen}
                      setSelectedOption={setStatus}
                      selectedOption={status}
                    />
                  </div>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Отримувач:</h2>
                  <p css={description}>
                    {data.recipient_last_name
                      ? data.recipient_last_name
                      : data.last_name}{" "}
                    {data.recipient_name ? data.recipient_name : data.name}{" "}
                    {data.recipient_phone ? data.recipient_phone : ""}
                  </p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Передзвонити:</h2>
                  <p css={description}>{data.call_me_back ? "Так" : "Ні"}</p>
                </div>
                {isModalOpen &&
                  modalPortal &&
                  createPortal(
                    <Modal setIsOpen={setIsModalOpen}>
                      {status === "Відхилено" && (
                        <StatusWarningModal
                          updateStatus={() =>
                            handleUpdateStatus(Number(data.id))
                          }
                          name={data.id ? Number(data.id) : null}
                        />
                      )}
                    </Modal>,
                    modalPortal
                  )}
              </>
            )}
            <div css={infoWrapperBtn}>
              <h2 css={titleH2}>Видалити замовлення:</h2>
              <p css={description}>
                <button
                  css={btnDelete}
                  onClick={() => handleDelete(Number(data?.id))}
                >
                  Видалити
                </button>
              </p>
            </div>
          </div>
          <div css={itemsContainer}>
            {productsForRender.map((item) => (
              <CartItemCard key={nanoid()} item={item!} width={"100%"} />
            ))}
            <div css={infoWrapper}>
              <h2 css={titleH2}>Загальна ціна</h2>
              {data && <p css={totalAmount}>{data.total_amount} ₴</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderItemPage;
