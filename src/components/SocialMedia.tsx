import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import discord from "../assets/icons/discord.png";
interface SocialMediaProps {
  icon: "facebook" | "twitter" | "instagram" | "discord";
  onClick?: () => void;
  link?: string;
}
export default function SocialMedia(props: SocialMediaProps) {
  let icon = "";
  switch (props.icon) {
    case "facebook":
      icon = facebook;
      break;
    case "twitter":
      icon = twitter;
      break;
    case "instagram":
      icon = instagram;
      break;
    case "discord":
      icon = discord;
      break;
  }
  return (
    <a
      href={props.link}
      target="_blank"
      rel="external"
      className="w-14 h-14 bg-white rounded-full p-2 cursor-pointer hover:brightness-75"
    >
      <img
        src={icon}
        className="object-cover invert-[12%] sepia-[27%] saturate[555%] hue-rotate[190deg] brightness[92%] contrast[89%]"
      />
    </a>
  );
}
