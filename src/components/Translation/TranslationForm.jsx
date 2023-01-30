import { useState } from "react";
import { useForm } from "react-hook-form";
import { patchUser } from "../../api/user";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import TranslationSigns from "./TranslationSigns";

const translationConfig = {
    required: true,
    pattern: /^[A-Za-z]+$/,
    maxLength:40,
};
const TranslationForm = () => {
  const {user,setUser} = useUser()
  
    const [signs,setSigns] = useState(null)
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

  const onSubmit = async ({ translation }) => {
    const transArray = translation.split('');
    setSigns(<TranslationSigns signs={transArray}/>)
    const response = await patchUser(user.id,user.translations,translation)
    setUser(response)
    storageSave(STORAGE_KEY_USER, response)
   
};
   
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
