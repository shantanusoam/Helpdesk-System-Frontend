import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import { Entery } from './Pages/Entery.page';
import { DefaultLayout } from './Components/layout/DefaultLayout';
import { Dashboard } from './Pages/Dashboard/Dashboard.page';
function App() {
  return (
    <div className="App">
      
      {/* <Entery></Entery> */}
      <DefaultLayout><Dashboard></Dashboard></DefaultLayout>
    </div>
  );
}
 
export default App;  
