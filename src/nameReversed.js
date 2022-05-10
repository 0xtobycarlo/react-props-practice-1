import { reverse } from "./helpers";

function nameReversed(props) {
  return (
    <p className="name-reversed">
      Also, {props.name} backwards is {reverse(props.name)}
    </p>
  );
}

export default nameReversed;
