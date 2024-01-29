import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/TestPages/SignIn"
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
          <Link to="/">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
          <Link to="page4">Page 4</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<SignIn></SignIn>}></Route>
      <Route path="/page2" element={<Page2></Page2>}></Route>
      <Route path="/page3" element={<Page3></Page3>}></Route>
      <Route path="/page4" element={<Page4></Page4>}></Route>
    </Routes>

    </>
  );
}

export default App;
