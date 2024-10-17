import { container } from "./Achievements.styled";

const Achievements = () => {
  return (
    <div css={container}>
      <div>
        <h3>16 років практики </h3>
        <p>16 років практики в області східної медицини та аароматерапії</p>
      </div>
      <div>
        <h3>3 роки практики </h3>
        <p>і активгого розвитку, навчання в області нутріуціології</p>
      </div>
      <div>
        <h3>450 аромакомпозицій </h3>
        <p>по моїм авторським рецептам для укріплення здоровья</p>
      </div>
    </div>
  );
};

export default Achievements;
