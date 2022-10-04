import React from "react";
import Spinner from "../Spinner/Spinner";

export const CustomButton = ({
  type,
  disabled,
  buttonText,
  className,
  isLoading,
  onClick,
} = {}) => {
  return (
    <div className="button__container">
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className}
      >
        {/* {isLoading === false ? <Spinner /> : { buttonText }} */}
        {buttonText}
      </button>
    </div>
  );
};
