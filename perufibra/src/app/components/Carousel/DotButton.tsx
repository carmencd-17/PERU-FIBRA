import type { FC } from "react";
import type { DotButtonPropType } from "../interfaces/Carousel.props";

export const DotButton: FC<DotButtonPropType> = ({
  selected,
  onClick,
}) => {
  return (
    <button
      className={`embla__dot ${selected ? "embla__dot--selected" : ""}`}
      type="button"
      onClick={onClick}/>
  );
};
