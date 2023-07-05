import { useState } from 'react';
import SearchBar from './SearchBar';
import DisplayList from './DisplayList';
export default function SearchableList({ data }) {
  const [searchResult, setSearchResult] = useState(data);

  const handleSearch = (event) => {
    setSearchResult(
      data.filter((item) =>
        item.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <DisplayList data={searchResult} />
    </>
  );
}
