import { useAppSelector } from "@redux/hooks";
import { selectProduct } from "@redux/ads/selectors";

import { containerStyles } from "@styles/variables";

import AdminForm from "@components/AdminForm";
import { sectionStyle } from "@pages/CreateAdvertPage/CreateAdvertPage.styled";

const EditAdvertPage = () => {
  const product = useAppSelector(selectProduct);
  return (
    <section css={sectionStyle}>
      <div css={containerStyles}>
        <AdminForm product={product} />
      </div>
    </section>
  );
};

export default EditAdvertPage;
