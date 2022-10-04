import React, { useState, useEffect } from "react";
import { InputField } from "../../components/Input/Input";
import openEye from "../../assets/icons/open-eye.svg";
import { MdCancel } from "react-icons/md";
import { Gf } from "../../components/GF/Gf";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { CustomButton } from "../../components/Input/Button";
import "./sign.scss";

export const Index = () => {
  // const initialValues = {
  //   username: "",
  //   password: "",
  // };

  // const [formState, setFormState] = useState({
  //   username: "",
  //   password: "",
  // });

  const [error, setError] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const clearForm = () => {
    setName("");
    setPassword("");
  };

  const showPassword = () => {
    setShowPassword(!show);
  };

  const handleChange = (e) => {
    setError(false);
    setSuccess(false);
    const value = e.target.value;
    setName(value);
  };

  const handlePasswordChange = (e) => {
    setError(false);
    setSuccess(false);
    const value = e.target.value;
    setPassword(value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitting form -===", name);

    try {
      setSuccess(true);
      clearForm();
    } catch (error) {
      setError(true);
      setErrorMessage("Input form values");
    }
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setSuccess(false);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  });

  return (
    <div className="form flex flex-jc-c flex-ai-c flex-wr">
      <div className="form__wrapper">
        <form className="form__header" onSubmit={submit}>
          {success && (
            <div className="bg-green-100 rounded p-5 text-green-900 my-4 flex justify-between items-center">
              <div>
                <div className="font-bold">Success</div>
                <div className="font-bold pt-2">Sign In successful</div>
              </div>
              <MdCancel
                className="text-3xl text-green-900 cursor-pointer"
                onClick={() => setSuccess(false)}
              />
            </div>
          )}

          {error && (
            <div className="bg-red-100 rounded p-5 text-red-900 my-4">
              <div className="font-bold">Error</div>
              <div className="font-thin">{errorMessage}</div>
            </div>
          )}

          <span className="form__span">Sign In With</span>

          <Gf />
          <div className="form__input">
            <span>username</span>
            <InputField
              placeholder="Olúwáṣeun"
              id="username"
              type=" "
              name="username"
              required={true}
              onChange={handleChange}
              value={name}
            />
            <span className="focus"></span>
          </div>

          <div className="form__input">
            <span>
              Password{" "}
              <Link to="/" className="form__forgot">
                Forgot?
              </Link>
            </span>
            <InputField
              type={show ? "text" : "password"}
              name="password"
              placeholder="*********"
              onChange={handlePasswordChange}
              required={true}
              icon={openEye}
              value={password}
              onToggle={showPassword}
            />
          </div>

          <CustomButton
            type="submit"
            buttonText="Sign In"
            className="btn__container__button flex flex-ai-c flex-jc-c"
          />

          <div className="form__para w-full text-center">
            <span>Not a member? </span>
            <Link to="/" className="form__para__link">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
