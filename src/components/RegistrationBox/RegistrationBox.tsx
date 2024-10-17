import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import Select, { OptionProps, SingleValue, components } from "react-select";

import {
  agreementStyle,
  container,
  descriptionWrapper,
  errorStyle,
  formStyle,
  formWrapper,
  checkboxStyle,
  inputStyle,
  submitStyle,
  messageInput,
  customStyles,
  OptionType,
  selectInputStyle,
} from "./RegistrationBox.styled";

import checkedIcon from "@assets/icons/checked.svg";
import { sendCourseNotification } from "@services/servicesApi";

import { inputLabel } from "@components/AdminForm/AdminForm.styled";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(30, "Має бути не більше 30 символів")
    .required("Обов'язкове"),
  course: Yup.string().required("Обов'язковий"),
  email: Yup.string()
    .email("Невірна адреса електронної пошти")
    .required("Обов'язковий"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Невірний номер телефону")
    .required("Обов'язковий"),
  message: Yup.string().max(200, "Не більше 200 символів"),
  agreement: Yup.boolean().oneOf([true], "Обов'язковий"),
});

const CustomOption = (props: OptionProps<OptionType>) => (
  <components.Option {...props}>
    {props.isSelected && <img src={checkedIcon} alt="check icon" />}
    {props.label}
  </components.Option>
);

interface IRegistrationBoxProps {
  options: { value: string; label: string }[];
  pickedCourse?: string;
  children: React.ReactNode;
}

const RegistrationBox: React.FC<IRegistrationBoxProps> = ({
  children,
  options,
  pickedCourse,
}) => {
  const initialCourse =
    options.find(({ label }) => pickedCourse === label) || null;

  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(
    initialCourse?.value || ""
  );

  useEffect(() => {
    setSelectedCourse(initialCourse?.value);
  }, [initialCourse]);

  return (
    <div css={container}>
      <div css={descriptionWrapper}>{children}</div>
      <div css={formWrapper}>
        <Formik
          initialValues={{
            name: "",
            course: selectedCourse || "",
            email: "",
            phone: "",
            message: "",
            agreement: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log({ ...values, phone: values.phone });
            await sendCourseNotification(values).then(() => resetForm());
            if (options.length > 1) {
              setSelectedCourse(undefined);
            }
          }}
          validateOnBlur={false}
        >
          {({ setFieldValue, setFieldTouched, touched, errors, values }) => (
            <Form css={formStyle}>
              <label htmlFor="name">
                <Field
                  name="name"
                  type="text"
                  placeholder="Ім’я"
                  css={inputStyle}
                  onFocus={() => setFieldTouched("name", false, false)}
                  style={
                    errors.name && touched.name
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                <p css={inputLabel(!!values.name)}>Ім’я</p>
                <ErrorMessage name="name">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="course">
                <Select
                  isMulti={false}
                  name="course"
                  options={options}
                  value={
                    options.find((option) => option.value === selectedCourse) ||
                    null
                  }
                  styles={{
                    ...customStyles,
                    control: (provided) => ({
                      ...provided,
                      ...selectInputStyle(!!(touched.course && errors.course)),
                    }),
                  }}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Що цікавить?"
                  components={{ Option: CustomOption }}
                  onChange={(option) => {
                    setFieldValue(
                      "course",
                      (option as SingleValue<OptionType>)?.value
                    );
                    option && setSelectedCourse(option.value);
                  }}
                />
                <p css={inputLabel(!!values.course)}>Курс</p>
                <ErrorMessage name="course">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="email">
                <Field
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  css={inputStyle}
                  onFocus={() => setFieldTouched("email", false, false)}
                  style={
                    errors.email && touched.email
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                <p css={inputLabel(!!values.email)}>E-mail</p>
                <ErrorMessage name="email">
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
                      css={inputStyle}
                      style={
                        errors.phone && touched.phone
                          ? { border: "1px solid red" }
                          : {}
                      }
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
                  name="message"
                  as="textarea"
                  placeholder="Текст повідомлення"
                  css={messageInput}
                />
                <p css={inputLabel(!!values.message)}>Текст повідомлення</p>
                <ErrorMessage name="message">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <Field
                type="checkbox"
                name="agreement"
                id="agreement"
                css={checkboxStyle}
              />
              <label
                htmlFor="agreement"
                css={agreementStyle}
                style={
                  errors.agreement && touched.agreement
                    ? {
                        color: "red",
                      }
                    : undefined
                }
              >
                Я погоджуюсь на обробку моїх персональних данних
              </label>

              <button
                type="submit"
                css={submitStyle}
                onClick={() => {
                  setFieldValue("course", selectedCourse);
                }}
              >
                Зареєструватись
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationBox;
