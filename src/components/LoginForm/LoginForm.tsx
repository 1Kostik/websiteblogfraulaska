import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import {
  errorAuthStyle,
  errorBorder,
  errorStyle,
  eyeWrapper,
  formStyle,
  formWrapper,
  inputStyle,
  labelStyle,
  submitStyle,
} from "./LoginForm.styled";

import { authUser } from "@redux/auth/operations";
import { useAppDispatch } from "@redux/hooks";
import { useSelector } from "react-redux";
import { selectAuthError, selectToken } from "@redux/auth/selectors";
import { clearError } from "@redux/auth/slice";

import { ILogin } from "Interfaces/ILogin";

import { ReactComponent as CloseEyeIcon } from "@assets/icons/eye-close.svg";
import { ReactComponent as OpenEyeIcon } from "@assets/icons/eye-open.svg";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Введіть коректну електронну адресу")
    .max(40, "Логін має бути не більше 40 символів")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9!]+$/,
      "Пароль повинен містити лише англійські літери та цифри"
    )
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "Пароль повинен містити хоча б одну англійську літеру та одну цифру"
    )
    .min(8, "Пароль має бути від 8 до 15 символів")
    .max(25, "Пароль має бути від 8 до 25 символів")
    .required("Обов'язкове поле"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const authError = useSelector(selectAuthError);
  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: ILogin) => {
          dispatch(authUser(values));
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ touched, errors, setFieldError }) => (
          <div css={formWrapper}>
            <Form css={formStyle}>
              {authError === "Email or password invalid!" && (
                <div css={errorAuthStyle}>Невірний логін, пароль!</div>
              )}
              <label htmlFor="email" css={labelStyle}>
                <Field
                  type="string"
                  name="email"
                  id="email"
                  placeholder="Логін"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.email && touched.email)),
                  ]}
                  onFocus={() => {
                    dispatch(clearError());
                    setFieldError("email", undefined);
                  }}
                />
                <ErrorMessage name="email">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="password" css={labelStyle}>
                <Field
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.password && touched.password)),
                  ]}
                  onFocus={() => {
                    dispatch(clearError());
                    setFieldError("password", undefined);
                  }}
                />

                <div onClick={handleShowPassword} css={eyeWrapper}>
                  {isShowPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </div>

                <ErrorMessage name="password">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <button type="submit" css={submitStyle}>
                Увійти
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
