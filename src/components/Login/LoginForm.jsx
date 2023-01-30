import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
const usernameConfig = {
  required: true,
  minLength: 3,
};
//will be use as string inside button, had to do this as react doesnt like arrows and dash in string 
//and cannot comment inside HTML
const arrow = `->`
const LoginForm = () => {
  //hooks
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  //local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  //side effects
  useEffect(() => {
    //if there is a user logged in, navigate to translation page
    if (user !== null) {
      navigate("/Translation");
    }
  }, [user, navigate]); //updates when variables user or navigate is changed
  //event handlers
  const onSubmit = async ({ username }) => {
    //disables button while loading
    setLoading(true);
    //destructure error and success
    const [error, userResponse] = await loginUser(username);
    //if there is an error, update state to error
    if (error !== null) {
      setApiError(error);
    }
    //if successful- add key and user object to local storage and update state
    //which will navigate to next page
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    //when done, re activate button
    setLoading(false);
  };
  //render functions

  //display reason why input is not valid
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username too short</span>;
    }
  })();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">🎹</label>
          <input
            type="text"
            placeholder="What's your name?"
            {...register("username", usernameConfig)}
            />
        <button type="submit" disabled={loading}>
        
        {arrow}
        </button>
            {errorMessage}
        </fieldset>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};
export default LoginForm;
