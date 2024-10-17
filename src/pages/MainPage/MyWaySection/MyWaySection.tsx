import { css } from "@emotion/react";

import ContentBox from "@components/ContentBox";
import { containerStyles } from "@styles/variables";

import plugImg4 from "/src/assets/images/legs-in-stockings.webp";

const MyWaySection = () => {
  return (
    <section
      css={[
        containerStyles,
        css`
          padding: 0 !important;
        `,
      ]}
    >
      <ContentBox
        photo={plugImg4}
        type="myWay"
        changeDirection={true}
        isHideMobileImg={true}
      >
        Мій шлях
      </ContentBox>
    </section>
  );
};

export default MyWaySection;
