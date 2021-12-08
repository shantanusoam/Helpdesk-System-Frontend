
import "./App.css";

import { DefaultLayout } from "./Components/layout/DefaultLayout";
import { Dashboard } from "./Pages/Dashboard/Dashboard.page";
import { AddTicket } from "./Pages/new-ticket/AddTicket.page";
function App() {
  return (
    <div className="App">
      {/* <Entery></Entery> */}
      <DefaultLayout>
        {/* <Dashboard></Dashboard> */}
        <AddTicket> </AddTicket>
      </DefaultLayout>
    </div>
  );
}

export default App;
