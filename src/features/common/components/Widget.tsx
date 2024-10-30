import { Widget } from "../types";

const WidgetCard = ({ cols, children }: Widget) => {
  return (
    <div className={`bg-white shadow-lg w-full`}>
      {children}
    </div>
  );
};

export default WidgetCard;
