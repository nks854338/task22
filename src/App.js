import Search from './Search';
import Stories from './Stories';
import './App.css';
import { AppContext } from './Context'

const App = () => {
// const data = useContext(AppContext);

  return (
    <>
     <Search/>
     <Stories/>
    </>
  );
};

export default App
