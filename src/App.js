import Dashboard from "./Dashboard";
import Login from "./Login";

function Checkuser(){
  var isLogin = localStorage.getItem('auth_token');
  if(isLogin){
    return(
    <Dashboard/>
    )
  }
  else{
    return(
    <Login/>)
  }
}

function App() {
  return (
    <Checkuser/>
  );
}

export default App;
