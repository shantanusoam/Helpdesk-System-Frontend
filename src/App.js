import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import { Entery } from './Pages/Entery.page';
import { DefaultLayout } from './Components/layout/DefaultLayout';
function App() {
  return (
    <div className="App">
      
      {/* <Entery></Entery> */}
      <DefaultLayout>//DashBoard</DefaultLayout>
    </div>
  );
}

export default App;
