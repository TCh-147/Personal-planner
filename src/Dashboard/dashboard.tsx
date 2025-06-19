import RecentEvents from "./recent-events";
import RecentGoals from "./recent-goals";
import DashboardStatistics from "./statistics";
import ToDo from "./to-do";

export default function Dashboard(){
    return(
        <>
            <p>Dashboard</p>
            <RecentEvents/>
            <RecentGoals/>
            <DashboardStatistics/>
            <ToDo/>
        </>
    )
}