import { useState } from "react";
import { useForm } from "react-hook-form";
import { patchUser } from "../../api/user";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import TranslationSigns from "./TranslationSigns";


const translationConfig = {
    required: true,
    //letters from a-z uppercase and lowercase only
    pattern: /^[A-Za-z]+$/,
    maxLength:40,
};
//will be use as string inside button, had to do this as react doesnt like arrows and dash in string 
//and cannot comment inside HTML
const arrow = `->`
const TranslationForm = () => {
  const {user,setUser} = useUser()
  //state will be used to display the input as images
    const [signs,setSigns] = useState(null)
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

  const onSubmit = async ({ translation }) => {
    //turn the input to array where each character has an index
    const transArray = translation.split('');
    //send to component which will return every letter as image
    setSigns(<TranslationSigns signs={transArray}/>)
    //update API
    const response = await patchUser(user.id,user.translations,translation)
    //update context and local storage
    setUser(response)
    storageSave(STORAGE_KEY_USER, response)
   
};
   //display reason why input is not valid
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
        if (errors.translation.type === "maxLength") {
          return <span>Max 40 letters</span>;
        }
      })()
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="translation">🎹</label>
          <input
            type="text"
            placeholder="Hello"
            {...register("translation", translationConfig)}
          />
        <button type="submit">
          {arrow}
        </button>
        {errorMessage}
        </fieldset>
        
      </form>
      <div id="signBox">{signs}</div>
    </>
  );
};
export default TranslationForm;
