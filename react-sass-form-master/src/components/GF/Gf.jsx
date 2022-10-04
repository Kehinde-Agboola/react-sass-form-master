import React from "react";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import "./Gf.scss";

export const Gf = ({ icon, name, url, className }) => {
  return (
    <div className="btn__container flex flex-ai-c flex-jc-sb flex-wr">
      <div className="btn__container__facebook flex flex-ai-c flex-jc-c flex-gap">
        <Link
          to="/"
          // className="btn__container__facebook"
          className="flex flex-ai-c flex-jc-c flex-gap1 btn__container__link"
        >
          <GrFacebook />
          <span>Facebook</span>
        </Link>
      </div>
      <div className=" btn__container__google flex flex-ai-c flex-jc-c flex-gap">
        <Link
          to="/"
          className="btn__container__link flex flex-ai-c flex-jc-c flex-gap1"
        >
          <FcGoogle />
          <span>Google</span>
        </Link>
      </div>
    </div>
  );
};
