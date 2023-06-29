export default function CustomButton(props) {
  return (
    <button
      className={props.className}
      style={{ backgroundColor: props.color }}>
      {props.name}
    </button>
  );
}
