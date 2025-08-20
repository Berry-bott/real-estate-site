import PropTypes from "prop-types";
import React from "react";
import tooltip from "./tooltip.svg";

/**
 * Budgeting component displays an icon with an optional tooltip.
 * When `property1` is set to "variant-2", it shows a tooltip labeled "Budgeting".
 */
export const Budgeting = ({ property1, className = "" }) => {
  const isVariant2 = property1 === "variant-2";

  return (
    <div
      className={`relative w-8 h-8 bg-[100%_100%] ${
        isVariant2 ? "bg-[url(/calculator.svg)]" : ""
      } ${className}`}
      role="img"
      aria-label={
        isVariant2 ? "Calculator icon with Budgeting tooltip" : "Icon"
      }
    >
      {isVariant2 && (
        <div className="absolute top-[38px] left-[-22px] inline-flex flex-col items-center shadow-shadow-2xl z-10">
          <img
            className="w-4 h-[8.52px]"
            alt=""
            src={tooltip}
            aria-hidden="true"
            loading="lazy"
          />
          <div className="flex flex-col items-start px-3 py-2 bg-zinc-900 rounded-lg">
            <span className="text-white text-center font-footnote-regular text-[length:var(--footnote-regular-font-size)] tracking-[var(--footnote-regular-letter-spacing)] leading-[var(--footnote-regular-line-height)] whitespace-nowrap">
              Budgeting
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

Budgeting.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]).isRequired,
  className: PropTypes.string,
};