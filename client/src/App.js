import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Services from "./components/Service";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* sidebar */}

      {/*  dashboard */}
      <Router>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service" element={<Services />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>

      {/* <div className="dashboard">
        <Dashboard></Dashboard>
      </div> */}
    </div>
  );
}

export default App;
