import LoginForm from "@components/LoginForm";
import { containerStyles } from "@styles/variables";

const LoginPage = () => {
  return (
    <>
      <div css={containerStyles}>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
