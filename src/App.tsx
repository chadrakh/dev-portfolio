import { useEffect } from 'react';
import Landing from './components/pages/landing';

const App : React.FC = () => {
  useEffect(() => {
    document.title = "Chadrak Holondo - Developer Portfolio";
  }, []);

  return (
    <>
      <Landing />
    </>
  );
}

export default App;
