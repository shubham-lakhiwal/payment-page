import './App.css';
import Navigation from "@/components/navigation/Navigation.tsx";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navigation />
        <Dashboard />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
