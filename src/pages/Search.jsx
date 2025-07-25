import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const location = useLocation();
  
  return useMemo(() => {
    const params = new URLSearchParams(location.search);
    const result = {};
    for (const [key, value] of params.entries()) {
      result[key] = value;
    }
    return result;
  }, [location.search]);
};

function App() {
  const queryParams = useQueryParams();
  const id = queryParams.id;
  const category = queryParams.category || 'category';
  return (
    <>
      ID: {id}
      Category: {category}
    </>
  )
}

export default App;