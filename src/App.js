import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/TestPages/SignIn"
import {WS_CheckIn} from "./pages/TestPages/WS_CheckIn"
import {Page2} from "./pages/TestPages/Page2"
import {Page3} from "./pages/TestPages/Page3"
import {Page4} from "./pages/TestPages/Page4"
import {Header} from "./components/Universal/Header";


function App() {
  return (
    <>
    <nav>
      <Header/>
      <ul>
        <li>
          <Link to="/">Home</Link> <br></br>
          <Link to="/WS_CheckIn">WsCheckIn</Link> <br></br>
          <Link to="/page2">Page 2</Link> <br></br>
          <Link to="/page3">Page 3</Link> <br></br>
          <Link to="page4">Page 4</Link> <br></br>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<SignIn></SignIn>}></Route>
      <Route path="/WS_CheckIn" element={<WS_CheckIn></WS_CheckIn>}></Route>
      <Route path="/page2" element={<Page2></Page2>}></Route>
      <Route path="/page3" element={<Page3></Page3>}></Route>
      <Route path="/page4" element={<Page4></Page4>}></Route>
    </Routes>

    </>
  );
}

export default App;
