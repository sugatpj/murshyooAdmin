import Routing from "./component/Routing/Routing";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AuthState } from "./component/Context/AuthState";
import { GetUserState } from "./component/Context/GetUserState";

function App() {
  return (
    <div className="App">
      <AuthState>
        <GetUserState>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </GetUserState>
      </AuthState>
    </div>
  );
}

export default App;
