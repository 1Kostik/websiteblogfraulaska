import Achievements from "@components/Achievements";
import ContentBox from "@components/ContentBox";
import { containerStyles } from "@styles/variables";

import plug from "@assets/images/plug3.svg";
import TabBox from "@components/TabBox";
import { tabArr } from "@constants/tabArr";

import frauLaska from "@assets/images/frau-laska.webp";
import { foWhoCourse } from "@constants/forWhoCourse";

const InfoSection = () => {
  return (
    <section>
      <div css={containerStyles}>
        <Achievements />
        <ContentBox
          photo={plug}
          contentGap={[16, 16, 20]}
          type={"info"}
          changeDirection={true}
        >
          Як не дивно, але довголіття починається ще до народження. Спосіб життя
          матері, харчування, психологічний стан — це все є фундаментом міцного
          здоровя. На щастя, в наш час існує багато безпечних способів
          відновлення, оздоровлення. Кожен з нас може зробити крок до здорового
          способу життя, виправити під супровідом спеціалиста всі хворобливі
          стани в органах і системах та навчитися уникати їх у майбутньому.
          Головне - бажання і спеціалист з оздоровлення, який стане підтримкою
          та опорою на шляху.
        </ContentBox>
        <TabBox
          content={tabArr}
          photo={frauLaska}
          title={"Title"}
          imgThumbHeight={600}
        />
        <TabBox
          title="Для кого ця послуга?"
          content={foWhoCourse}
          imgThumbHeight={400}
        />
      </div>
    </section>
  );
};

export default InfoSection;
