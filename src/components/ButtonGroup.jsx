import { Button, ButtonGroup } from "react-bootstrap";

const ButtonGroupBar = () => {
  return (
    <ButtonGroup className="my-2" aria-label="Basic example" size="sm">
      <Button variant="secondary">1</Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
    </ButtonGroup>
  );
};
export default ButtonGroupBar;
