import { Account } from "./components/Account";
import Login from "./components/Login";
import Setting from "./components/Setting";
import Signup from "./components/Signup";
import Status from "./components/Status";

function App() {
  return (
    <Account>
      <Status />
      <hr />
      <Signup />
      <hr />
      <Login />
      <hr />
      <Setting />
    </Account>
  );
}

export default App;
