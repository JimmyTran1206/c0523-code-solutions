export default function SearchBar({ handleSearch }) {
  return (
    <div>
      <input
        type="text"
        name="searchForm"
        placeholder="🔍Search your word"
        onInput={handleSearch}
        style={{ fontSize: 'calc(10px + 2vmin)', margin: '20px' }}
      />
    </div>
  );
}
