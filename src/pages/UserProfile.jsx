import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();

  return (<>
  User Profile: {id}
  </>)
}

export default App;