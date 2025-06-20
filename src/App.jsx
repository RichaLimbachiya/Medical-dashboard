import React from "react";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";
import OverviewChart from "./assets/components/OverviewChart";
import AppointmentList from "./assets/components/AppointmentList";
import PatientList from "./assets/components/PatientList";

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="top-section">
          <OverviewChart />
          <AppointmentList />
        </div>
        <div className="bottom-section">
          <PatientList />
          
        </div>
      </div>
    </div>
  );
}

export default App;