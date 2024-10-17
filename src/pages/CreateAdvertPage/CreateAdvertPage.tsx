import AdminForm from "@components/AdminForm";
import { containerStyles } from "@styles/variables";
import { sectionStyle } from "./CreateAdvertPage.styled";
import { useEffect } from "react";
import { useCheckTokenExpiration } from "@hooks/useCheckTokenExpiration";

const CreateAdvertPage = () => {
  const checkExpiration = useCheckTokenExpiration();

  useEffect(() => {
    checkExpiration();
  }, []);

  return (
    <section css={sectionStyle}>
      <div css={containerStyles}>
        <AdminForm />
      </div>
    </section>
  );
};

export default CreateAdvertPage;
