import "./styles.css";

function title(props) {
  return (
    <h1 className="title" name={props.name}>
      Welcome, {props.name}!
    </h1>
  );
}

export default title;
