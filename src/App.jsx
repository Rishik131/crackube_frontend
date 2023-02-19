import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Workspace from './components/Workspace/Workspace';

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Workspace/>}/>
    </Routes>
    </>
  )
}

export default App
