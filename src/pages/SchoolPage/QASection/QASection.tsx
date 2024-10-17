import { questionsArr } from "@constants/questionsArr";
import Advise from "@components/Advise";
import QABox from "@components/QABox/QABox";
import { containerStyles } from "@styles/variables";

const QASection = () => {
  return (
    <section>
      <div css={containerStyles}>
        <QABox content={questionsArr} />
        <Advise />
      </div>
    </section>
  );
};

export default QASection;
