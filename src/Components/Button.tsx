import { Button as BootButton } from "react-bootstrap"; // error 'cannot find'
// i like what u did to call it a bootbutton, to differentiate it

interface ButtonProps {
  // why not just exclude this and say Button = ({ text }: string) => etc
  text: string;
}
//
const Button = ({ text }: ButtonProps) => {
  // link to bootstrap docs
  // https://react-bootstrap.github.io/components/alerts

  return <BootButton variant="primary">{text}</BootButton>;
};

export default Button;

/*
A: npm install should fix the 'cannot find'
running ^ is necessary every time you switch between branches that have different dependencies defined in package.json

B: So a very common syntax for accessing data from an object is deconstructing it (theres probably a specific name for this syntax)...

this component without deconstructing
const Button = (props: ButtonProps) => { 

  return <BootButton variant="primary">{props.text}</BootButton>;
};

notice how ButtonProps is describing the type of an object so string wouldn't be correct. you could do this inline like I did in layout or make an interface like i did here

example to show another common deconstruction pattern with nested data
const Button = ({text, data}: ButtonProps) => { 
  const {some_primitive1, some_primitive2} = data;
  return <BootButton variant="primary" attribute={some_primitive1}>{text}</BootButton>;
};

*/
