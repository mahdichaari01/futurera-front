interface buttonProps {
  children?: string;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}
export default function Button(props: buttonProps) {
  const size = props.size || "md";
  return (
    <button
      className={`text-center hover:active:brightness-90 py-4 leading-none font-bold text-white rounded-xl disabled:bg-[#575757] disabled:text-[#888888] bg-primary ${
        size === "sm"
          ? "text-lg min-w-[12.875rem] w-fit py-3"
          : size === "lg"
          ? "text-2xl w-full"
          : "text-xl w-full py-[0.9rem]"
      }      `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
