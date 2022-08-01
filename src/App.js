import { useCallback, useState } from "react";
import SearchResults from "./components/SearchResults";

function App() {
  const [ search, setSearch ] = useState('');
  const [ results, setResults ] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()
    setResults(data)
    return true;
  }
  const addToWishList = useCallback((productId) => {
    console.log(productId)
  }, [])
  
  return (
    <div>
      <h1>Products search</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <SearchResults addToWishList={addToWishList} results={results} />
    </div>
  );
}

export default App;
