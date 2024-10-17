import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-right32.svg";
import { adviseContainer } from "./Advise.styled";

const Advise = () => {
  return (
    <div css={adviseContainer}>
      <h3>Прочитай щось корисне, підпишись на наш телеграм</h3>
      <a href="tg://resolve?domain=dimside29" id="registrationForm">
        <ArrowIcon />
      </a>
    </div>
  );
};

export default Advise;
