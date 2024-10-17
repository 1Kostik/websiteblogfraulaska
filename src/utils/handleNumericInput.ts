export const handleNumericInput = (
  e: React.KeyboardEvent<HTMLInputElement>
) => {
  const allowedChars = /[0-9]/;
  if (
    !allowedChars.test(e.key) &&
    e.key !== "Backspace" &&
    e.key !== "Delete"
  ) {
    e.preventDefault();
  }
};
