import { css } from "@emotion/react";

import ContentBox from "@components/ContentBox";
import { containerStyles } from "@styles/variables";

import plugImg1 from "/src/assets/images/plug1.svg";
import plugImg2 from "/src/assets/images/plug2.webp";

const HistorySection = () => {
  return (
    <section
      id="section2"
      css={css`
        padding: 40px 0;
      `}
    >
      <div css={containerStyles}>
        <ContentBox photo={plugImg1} contentGap={[16, 16, 20]} type={"info"}>
          Більше 16 років я присвятила питанню оздоровлення та психологічного
          відновлення людей. З початком агресії країни терориста я почала
          активно допомагати військовим в питаннях психологічної підтримки,
          стала для них духовною сестрою. З початку повномасштабного вторгнення
          моя увага приділялася також і цивільним, які пережили військові події,
          або знаходяться в постійному стресі на більш мирних територіях.
        </ContentBox>
        <ContentBox
          photo={plugImg2}
          contentGap={[16, 16, 20]}
          isHideMobileImg={true}
          changeDirection={true}
          type={"info"}
        >
          За цей період яктивно вивчала психологію (в більшості роботу з
          метафоричними картами в період кризи, втрат, військових дій).
          Закінчила міжнародний університет нутріціології та натуропатії,
          активно підвищувала кваліфікацію на різноманітних курсах,
          конференціях. Для того, щоб приймати участь у питаннях відродження
          нашої нації, а питання здоров’я та психіки в цьому напрямку стоїть на
          першому місці, я відкрила офіційно міжнародну асоціацію ароматерапії,
          натуропатії та практичної психології яку наразі розвиваю створюючи
          коло спеціалістів. З чого починається здоровя
        </ContentBox>
      </div>
    </section>
  );
};

export default HistorySection;
