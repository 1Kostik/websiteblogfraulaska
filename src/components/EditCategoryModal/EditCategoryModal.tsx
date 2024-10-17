import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

import { formStyle } from "./EditCategoryModal.styled";

interface IEditCategoryProps {
  name: string;
  onTitleEdit: (category: string, newName: string) => void;
}

interface IInitialValues {
  newName: string;
}

const initialValues: IInitialValues = {
  newName: "",
};

const schema = Yup.object({
  newName: Yup.string(),
});

const EditCategoryModal: React.FC<IEditCategoryProps> = ({
  name,
  onTitleEdit,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: IInitialValues) => {
          if (!values.newName) return;
          onTitleEdit(name, values.newName);
        }}
      >
        {() => {
          return (
            <Form css={formStyle}>
              <h2>Зміна назви категорії:</h2>
              <p>{name}</p>
              <label htmlFor="newName">Нове ім'я</label>
              <Field
                name="newName"
                type="text"
                placeholder="Введіть нове ім'я"
                id="newName"
              />
              <button type="submit">Змінити</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default EditCategoryModal;
