export default function DisplayList({ data }) {
  return (
    <div>
      {data.length ? (
        data.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <p>No items match the filter</p>
      )}
    </div>
  );
}
