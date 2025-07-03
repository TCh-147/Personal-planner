import Navigation from "../CommonComponents/Navigation";
import RecentEvents from "./RecentEvents";
import RecentGoals from "./RecentGoals";
import Statistics from "./Statistics";
import ToDo from "./ToDo";

export default function Dashboard(){
    return(
        <>
            <Navigation/>
            <div className="my-2 p-8 bg-gray-100 shadow-lg">
                <p>Dashboard</p>
                <RecentEvents/>
                <RecentGoals/>
                <Statistics/>
                <ToDo/>
            </div>
            
        </>
    )
}