import { Button as BootButton } from "react-bootstrap";

interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  // link to bootstrap docs
  // https://react-bootstrap.github.io/components/alerts

  return <BootButton variant="primary">{text}</BootButton>;
};

export default Button;
