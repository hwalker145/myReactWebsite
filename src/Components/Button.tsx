import { Button as BootButton } from "react-bootstrap"; // error 'cannot find'
// i like what u did to call it a bootbutton, to differentiate it

interface ButtonProps { // why not just exclude this and say Button = ({ text }: string) => etc
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  // link to bootstrap docs
  // https://react-bootstrap.github.io/components/alerts

  return <BootButton variant="primary">{text}</BootButton>;
};

export default Button;
