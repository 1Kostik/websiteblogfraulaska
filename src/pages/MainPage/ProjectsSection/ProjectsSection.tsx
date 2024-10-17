import ContentBox from "@components/ContentBox";
import { containerStyles } from "@styles/variables";
import { projectsFlex, section } from "./ProjectsSection.styled";

import plugImg1 from "/src/assets/images/plug3.svg";
import plugImg2 from "/src/assets/images/plug4.svg";
import plugImg3 from "/src/assets/images/humanitarian_aid.webp";

const ProjectsSection = () => {
  return (
    <section css={section}>
      <div css={[containerStyles, projectsFlex]}>
        <h2>Мої проєкти:</h2>
        <ContentBox photo={plugImg1} contentGap={12} type={"projects"}>
          <h3>
            Міжнародна асоціація ароматерапії, натуропатії та практичної
            психології «Frau Laska«
          </h3>
          <p>
            Перша в Україні асоціація, яка складається з повноцінного навчання
            спеціалістів допомагаючих професій ( ароматерапія, натуропатія та
            метафоричні карти як дієвий інструмент для психологічного
            відновлення), а також кола людей, які взяли на себе задачу
            відновлення нашої нації, допомоги людям пройти ці складні кроки
            перемоги.
          </p>
          <a href="#">Перейти</a>
        </ContentBox>
        <ContentBox photo={plugImg3} contentGap={12} type={"projects"}>
          <h3>
            Добровольче обʼєднання патронатного супроводу військових «Sol»
          </h3>
          <p>
            Метою обʼєднання є патронатна допомога захисникам ( психологічна,
            юридична, оздоровча та волонтерська). Команда спеціалістів мого
            обʼєднання виїжджає на місця несення служби, допомагає дистанційно.
            Також ми допомагаємо дітям з прифронтових сіл, рідним військових. Ми
            поряд!
          </p>
          <a href="#">Перейти</a>
        </ContentBox>
        <ContentBox photo={plugImg2} contentGap={12} type={"projects"}>
          <h3>Інтернет магазин ароматерапії та свічок</h3>
          <p>
            Більше 14 років існує інтернет магазин моїх авторських
            аромакомпозицій. Асортимент згодом я доповнила свічками з
            натурального воску для психологічної гармонії та травами. Метою цієї
            діялбності є допомога людині в питаннях здоровʼя та психологічна
            підтримка за допомогою природніх засобів
          </p>
          <a href="#">Перейти</a>
        </ContentBox>
      </div>
    </section>
  );
};

export default ProjectsSection;
