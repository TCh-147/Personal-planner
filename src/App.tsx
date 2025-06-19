import { useState } from "react";
import GoalsList from "./Goals/goals-list";
import EventsList from "./Events/events-list";
import NotesList from "./Notes/notes-list";
import Dashboard from "./Dashboard/dashboard";

function App() {
  const [isActiveDashboard, setIsActiveDashboard] = useState(true);
  const [isActiveGoals, setIsActiveGoals] = useState(false);
  const [isActiveEvents, setIsActiveEvents] = useState(false);
  const [isActiveNotes, setIsActiveNotes] = useState(false);

  const btnInactiveClasses: string = "px-4 py-2 mr-2 rounded-t-lg bg-gray-300 text-gray-700 hover:cursor-pointer hover:bg-gray-200 hover:text-black";
  const btnActiveClasses: string = "px-4 py-2 mr-2 rounded-t-lg bg-gray-100 shadow-lg font-semibold hover:cursor-default";

  function SetActive(name: string){
    ClearAll();
    switch(name){
      case "Dashboard": 
        setIsActiveDashboard(true);
        break;
      case "Goals": 
        setIsActiveGoals(true);
        break;
      case "Events" : 
        setIsActiveEvents(true);
        break;
      case "Notes" : 
        setIsActiveNotes(true);
        break;
    }
  }

  function ClearAll(){
    setIsActiveDashboard(false);
    setIsActiveGoals(false);
    setIsActiveEvents(false);
    setIsActiveNotes(false);
  }

  return (
    <>
      <div className="p-8 flex flex-col">
        <div>
          <button onClick={() => SetActive("Dashboard")} className={`${isActiveDashboard ? btnActiveClasses : btnInactiveClasses}`}>Dashboard</button>
          <button onClick={() => SetActive("Goals")} className={`${isActiveGoals ? btnActiveClasses : btnInactiveClasses}`}>Goals</button>
          <button onClick={() => SetActive("Events")} className={`${isActiveEvents ? btnActiveClasses : btnInactiveClasses}`}>Events</button>
          <button onClick={() => SetActive("Notes")} className={`${isActiveNotes ? btnActiveClasses : btnInactiveClasses}`}>Notes</button>
        </div>
        <div className="p-8 bg-gray-100 shadow-md">
          <div className={`${isActiveDashboard ? "flex flex-row" : "hidden"}`}><Dashboard/></div>
          <div className={`${isActiveGoals ? "block" : "hidden"}`}><GoalsList/></div>
          <div className={`${isActiveEvents ? "block" : "hidden"}`}><EventsList/></div>
          <div className={`${isActiveNotes ? "block" : "hidden"}`}><NotesList/></div>
        </div>
      </div>
    </>
  )
};

export default App