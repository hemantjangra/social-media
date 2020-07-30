import React from "react";
import NavBar from "../../features/Navigation/navBar";
import ActivityDashboard from "../../features/activities/dashboard/activityDashboard";

const App: React.FC = () => {

  console.log(`I am app component`);
  return (
    <div className="App">
      <NavBar/>
      <ActivityDashboard />
    </div>
  );
};

export default App;
