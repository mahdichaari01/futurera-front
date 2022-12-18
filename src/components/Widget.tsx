import { ReactComponent as WidgetBg } from "../assets/bg.svg";
import widgetbg from "../assets/bg.svg";
export function WidgetContainer(props: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: `url(${widgetbg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full aspect-h-[32057] aspect-w-[27577]"
    >
      {/* <WidgetBg className="w-full h-full" /> */}
      <div className="w-full h-full top-0 left-0 pl-[10%] pr-[14%] pt-[19%] pb-[17%] break-words">
        <div className="w-full h-full overflow-y-scroll cleanScrollbar">
          {props.children}
        </div>
      </div>
    </div>
  );
}
