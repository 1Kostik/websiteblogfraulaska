import RegistrationBox from "@components/RegistrationBox";
import { containerStyles } from "@styles/variables";

const options = [
  { value: "health", label: "Оздоровлення" },
  { value: "pregnant", label: "Для вагітних" },
  { value: "recovery", label: "Відновлення" },
  { value: "preparation", label: "Підготовка" },
];

interface IRegistrationSectionProps {
  pickedCourse: string;
}

const RegistrationSection: React.FC<IRegistrationSectionProps> = ({
  pickedCourse,
}) => {
  return (
    <section>
      <div css={containerStyles}>
        <RegistrationBox options={options} pickedCourse={pickedCourse}>
          <h3>Реєстрація на курс</h3>
          <p>
            Eu mi et tellus etiam tellus varius ut fermentum. Lorem egestas
            lacinia nec aliquam elit etiam. Neque fames iaculis enim lacus.
            Risus cursus enim feugiat in praesent non.
          </p>
        </RegistrationBox>
      </div>
    </section>
  );
};

export default RegistrationSection;
