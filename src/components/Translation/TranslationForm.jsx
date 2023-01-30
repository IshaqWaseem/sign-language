import { useState } from "react";
import { useForm } from "react-hook-form";
import TranslationSigns from "./TranslationSigns";

const translationConfig = {
    required: true,
    pattern: /^[A-Za-z]+$/
};
const TranslationForm = () => {
    const [signs,setSigns] = useState(null)
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

  const onSubmit = async ({ translation }) => {
    console.log(translation)
    const transArray = translation.split('');
    console.log(transArray)
    setSigns(<TranslationSigns signs={transArray}/>)
};
    console.log(errors)
    const errorMessage = (() => {
        if (!errors.translation) {
          return null;
        }
        if (errors.translation.type === "required") {
          return <span>Input is required</span>;
        }
        if (errors.translation.type === "pattern") {
          return <span>Letters from a-z only!</span>;
        }
      })()
  return (
    <>
      <h2>Translate</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="translation">Translation: </label>
          <input
            type="text"
            placeholder="text to signs here !"
            {...register("translation", translationConfig)}
          />
        {errorMessage}
        </fieldset>
        <button type="submit">
          Continue
        </button>
        
      </form>
      <div>{signs}</div>
    </>
  );
};
export default TranslationForm;
