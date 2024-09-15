import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter h-full w-full gap-3 rounded-full border hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer ${variant} $
      {full && "w-full"}`}
      type={type}
    >
      {icon && <Image src={icon} alt="icon" width={25} height={25} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
