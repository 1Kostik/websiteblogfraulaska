import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";

import {
  deliveryTypes,
  errorBorder,
  errorStyle,
  formWrapper,
  groupWrapper,
  inputStyle,
  NPDeliveryWrapper,
  paymentMethods,
  recipientStyle,
} from "./CartForm.styled";

import { makePayment } from "@services/servicesApi";
import { makeOrder } from "@services/servicesApi";

import { replaceNullsWithEmptyStrings } from "@utils/replaceNullsWithEmptyStrings ";
import { orderItemsConverter } from "@utils/orderItemsConverter";


import { inputLabel } from "@components/AdminForm/AdminForm.styled";
import NewPostSelect from "@components/NewPostSelect";

import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";
import { IInitialCartFormValue } from "Interfaces/IInitialCartFormValue";

const validationSchema = (isOtherRecipient: boolean) =>
  Yup.object({
    name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .required("Обов'язкове"),
    last_name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .required("Обов'язкове"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Невірний номер телефону")
      .required("Обов'язковий"),
    email: Yup.string()
      .email("Невірна адреса електронної пошти")
      .required("Обов'язковий"),

    delivery_type: Yup.string().oneOf(["Нова пошта", "Самовивіз"]),
    delivery_city: Yup.string().test(
      "is-postPickup",
      "Поля доставки обов'язкові",
      function (value) {
        const { delivery_type } = this.parent;
        if (
          delivery_type === "Нова пошта" &&
          (value === null || value === undefined)
        ) {
          return false;
        }
        return true;
      }
    ),
    delivery_destination: Yup.string().test(
      "is-postPickup",
      "Поля доставки обов'язкові",
      function (value) {
        const { delivery_type } = this.parent;
        if (
          delivery_type === "Нова пошта" &&
          (value === null || value === undefined)
        ) {
          return false;
        }
        return true;
      }
    ),

    recipient_name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .test("isOtherRecipient-recipient_name", "Обов'язкове", function (value) {
        if (isOtherRecipient && (!value || value.trim() === "")) {
          return false;
        }
        return true;
      }),
    recipient_last_name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .test(
        "isOtherRecipient-recipient_last_name",
        "Обов'язкове",
        function (value) {
          if (isOtherRecipient && (!value || value.trim() === "")) {
            return false;
          }
          return true;
        }
      ),
    recipient_phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Невірний номер телефону")
      .test(
        "isOtherRecipient-recipient_phone",
        "Обов'язковий",
        function (value) {
          if (isOtherRecipient && (!value || value.trim() === "")) {
            return false;
          }
          return true;
        }
      ),

    payment_method: Yup.string().oneOf(["LiqPay", "Накладний платіж"]),
  });

const initialValue: IInitialCartFormValue = {
  name: "",
  last_name: "",
  phone: "",
  email: "",
  delivery_type: "Нова пошта",
  delivery_city: "",
  delivery_destination: "",
  recipient_name: "",
  recipient_last_name: "",
  recipient_phone: "",
  payment_method: "LiqPay",
};

interface ICartFormProps {
  addedItems: IAddedToCartProduct[];
  total_amount: number;
  callMeBack: boolean;
}

const CartForm: React.FC<ICartFormProps> = ({ addedItems, callMeBack }) => {
  const [isOtherRecipient, setIsOtherRecipient] = useState(false);

  const navigate = useNavigate();

  const handleRecipient = () => {
    setIsOtherRecipient((prev) => !prev);
  };

  const preventNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onOrderSubmit = (values: IInitialCartFormValue) => {
    console.log("values", values);

    const newOrder = {
      ...replaceNullsWithEmptyStrings(values),
      order_items: orderItemsConverter(addedItems),
      call_me_back: callMeBack,
    };
    if (values.payment_method === "LiqPay") {
      makeOrder(newOrder).then((resp) => {
        makePayment(resp).catch(() => navigate("/"));
      });
    } else {
      makeOrder(newOrder)
        .then(() => {
          navigate(`/ordered?email=${values.email}`);
        })
        .catch(() => navigate("/"));
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema(isOtherRecipient)}
      onSubmit={(values) => onOrderSubmit(values)}
      validateOnBlur={false}
    >
      {(formik) => {
        const { setFieldValue, setFieldTouched, touched, errors, values } =
          formik;
        return (
          <Form css={formWrapper} id="orderForm">
            <div
              role="group"
              aria-labelledby="contactDetailsLabel"
              css={groupWrapper}
            >
              <h3>Ваші контактні дані</h3>
              <div>
                <label htmlFor="name">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Ім’я"
                    css={[
                      inputStyle,
                      errorBorder(!!(errors.name && touched.name)),
                    ]}
                    onFocus={() => setFieldTouched("name", false, false)}
                    onKeyDown={preventNumberInput}
                  />
                  <p css={inputLabel(!!values.name)}>Ім’я</p>
                  <ErrorMessage name="name">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>

                <label htmlFor="last_name">
                  <Field
                    name="last_name"
                    type="text"
                    placeholder="Прізвище"
                    css={[
                      inputStyle,
                      errorBorder(!!(errors.last_name && touched.last_name)),
                    ]}
                    onFocus={() => setFieldTouched("last_name", false, false)}
                    onKeyDown={preventNumberInput}
                  />
                  <p css={inputLabel(!!values.last_name)}>Прізвище</p>
                  <ErrorMessage name="last_name">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>

                <label htmlFor="phone">
                  <Field name="phone">
                    {(props: FieldProps<string>) => (
                      <input
                        {...props.field}
                        type="tel"
                        placeholder="Номер телефону"
                        onFocus={() => {
                          setFieldTouched("phone", false, false);
                          if (!props.field.value) {
                            setFieldValue("phone", "+380");
                          }
                        }}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.match(/^\+380\d{0,9}$/)) {
                            setFieldValue("phone", value);
                          }
                        }}
                        onBlur={() => {
                          if (props.field.value === "+380") {
                            setFieldValue("phone", "");
                          }
                        }}
                        css={[
                          inputStyle,
                          errorBorder(!!(errors.phone && touched.phone)),
                        ]}
                      />
                    )}
                  </Field>
                  <p css={inputLabel(!!values.phone)}>Номер телефону</p>
                  <ErrorMessage name="phone">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>

                <label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    css={[
                      inputStyle,
                      errorBorder(!!(errors.email && touched.email)),
                    ]}
                    onFocus={() => setFieldTouched("email", false, false)}
                  />
                  <p css={inputLabel(!!values.email)}>E-mail</p>
                  <ErrorMessage name="email">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>
              </div>
            </div>

            <div
              role="group"
              aria-labelledby="deliveryLabel"
              css={groupWrapper}
            >
              <h3>Доставка</h3>
              <div>
                <div css={deliveryTypes}>
                  <Field
                    type="radio"
                    name="delivery_type"
                    value="Нова пошта"
                    id="postPickup"
                  />
                  <label htmlFor="postPickup">Нова пошта</label>
                  <Field
                    type="radio"
                    name="delivery_type"
                    value="Самовивіз"
                    id="selfPickup"
                  />
                  <label htmlFor="selfPickup">Самовивіз</label>
                </div>
                {values.delivery_type === "Нова пошта" && (
                  <div css={NPDeliveryWrapper}>
                    <NewPostSelect formik={formik} />
                    <ErrorMessage name="delivery_destination">
                      {(msg) => <div css={errorStyle}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                )}
              </div>
            </div>
            <div css={[groupWrapper, recipientStyle]}>
              <h3>Отримувач інша особа</h3>
              <input type="checkbox" id="recipient" className="hiddenInput" />
              <label htmlFor="recipient" onClick={handleRecipient}>
                Отримувач буде інша особа
              </label>
            </div>
            {isOtherRecipient && (
              <div
                role="group"
                aria-labelledby="recipientLabel"
                css={groupWrapper}
              >
                <h3>Контактні дані отримувача</h3>
                <div>
                  <label htmlFor="recipient_name">
                    <Field
                      name="recipient_name"
                      type="text"
                      placeholder="Ім’я"
                      css={[
                        inputStyle,
                        errorBorder(
                          !!(errors.recipient_name && touched.recipient_name)
                        ),
                      ]}
                      onFocus={() =>
                        setFieldTouched("recipient_name", false, false)
                      }
                      onKeyDown={preventNumberInput}
                    />
                    <p css={inputLabel(!!values.recipient_name)}>Ім’я</p>
                    <ErrorMessage name="recipient_name">
                      {(msg) => <div css={errorStyle}>{msg}</div>}
                    </ErrorMessage>
                  </label>

                  <label htmlFor="recipient_last_name">
                    <Field
                      name="recipient_last_name"
                      type="text"
                      placeholder="Прізвище"
                      css={[
                        inputStyle,
                        errorBorder(
                          !!(
                            errors.recipient_last_name &&
                            touched.recipient_last_name
                          )
                        ),
                      ]}
                      onFocus={() =>
                        setFieldTouched("recipient_last_name", false, false)
                      }
                      onKeyDown={preventNumberInput}
                    />
                    <p css={inputLabel(!!values.recipient_last_name)}>
                      Прізвище
                    </p>
                    <ErrorMessage name="recipient_last_name">
                      {(msg) => <div css={errorStyle}>{msg}</div>}
                    </ErrorMessage>
                  </label>

                  <label htmlFor="recipient_phone">
                    <Field name="recipient_phone">
                      {(props: FieldProps<string>) => (
                        <input
                          {...props.field}
                          type="tel"
                          placeholder="Номер телефону"
                          onFocus={() => {
                            setFieldTouched("recipient_phone", false, false);
                            if (!props.field.value) {
                              setFieldValue("recipient_phone", "+380");
                            }
                          }}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value.match(/^\+380\d{0,9}$/)) {
                              setFieldValue("recipient_phone", value);
                            }
                          }}
                          onBlur={() => {
                            if (props.field.value === "+380") {
                              setFieldValue("recipient_phone", "");
                            }
                          }}
                          css={[
                            inputStyle,
                            errorBorder(
                              !!(
                                errors.recipient_phone &&
                                touched.recipient_phone
                              )
                            ),
                          ]}
                        />
                      )}
                    </Field>
                    <p css={inputLabel(!!values.recipient_phone)}>
                      Номер телефону
                    </p>
                    <ErrorMessage name="recipient_phone">
                      {(msg) => <div css={errorStyle}>{msg}</div>}
                    </ErrorMessage>
                  </label>
                </div>
              </div>
            )}

            <div role="group" aria-labelledby="paymenyLabel" css={groupWrapper}>
              <h3>Оплата</h3>
              <div css={paymentMethods}>
                <Field
                  type="radio"
                  name="payment_method"
                  value="LiqPay"
                  id="LiqPay"
                />
                <label htmlFor="LiqPay">
                  LiqPay - моментальні платежі по всьому світу
                </label>
                <Field
                  type="radio"
                  name="payment_method"
                  value="Накладний платіж"
                  id="deliveryPayment"
                />
                <label htmlFor="deliveryPayment">
                  Оплата при отриманні замовлення
                </label>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CartForm;
