import { Link } from "react-scroll";
import classNames from "classnames"; // Biblioteca para classes condicionais

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  route?: string;
  variant?: "primary" | "secondary" | "danger";
};

const Button = ({
  title,
  onClick,
  type,
  route,
  variant = "primary",
}: ButtonProps) => {
  const buttonClasses = classNames(
    "py-2 px-8 rounded-md text-sm text-center text-gray-900 transition-all duration-300",
    {
      "bg-gray-800 text-white hover:bg-gray-700": variant === "primary",
      "bg-gray-100 hover:bg-gray-200 text-gray-950":
        variant === "secondary",
      "bg-red-800 text-white hover:bg-red-700": variant === "danger",
    }
  );

  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      <Link
        to={route ? route : "home"}
        smooth={true}
        duration={500}
        className="w-full h-full"
      >
        {title}
      </Link>
    </button>
  );
};

export default Button;
