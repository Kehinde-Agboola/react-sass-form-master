import React from "react";
import "./styles.scss";

export const InputField = ({
  type,
  placeholder,
  value,
  name,
  id,
  onChange,
  onToggle,
  required,
  icon,
}) => {
  return (
    <div className="relative">
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
          required={required}
        />
      </div>
      {icon && (
        <div className="icon ">
          <img
            src={icon}
            alt=""
            className={name.includes("password") ? "cursor-pointer" : ""}
            onClick={onToggle}
          />
        </div>
      )}
    </div>
  );
};
