import { Widget } from "../types";

const WidgetCard = ({ cols, children }: Widget) => {
  return (
    <div className={`col-span-${cols} bg-white shadow-lg w-full`}>
      {children}
    </div>
  );
};

export default WidgetCard;
