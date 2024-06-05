import React from "react";
import classNames from "classnames";

export default function CustomButton({ image, text, color, ...props }) {
  const buttonClass = classNames("py-2.5 px-2 me-2 size-16 rounded-lg", {
    "w-32 h-10 border text-slate-50 text-sm": !image && text,
  });

  const imageClass = classNames("w-10 h-10 border rounded-lg");

  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <>
      <button
        {...props}
        type="button"
        className={buttonClass}
        style={buttonStyle}
      >
        {image ? <img src={image} alt="icon" className={imageClass} /> : text}
      </button>
    </>
  );
}
