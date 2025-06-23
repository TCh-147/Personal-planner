import { NavLink } from "react-router-dom";

export default function Navigation(){
    const btnInactiveClasses: string = "px-4 py-2 rounded-t-lg bg-gray-300 text-gray-700 hover:cursor-pointer hover:bg-gray-100 hover:text-black";
    const btnActiveClasses: string = "px-4 py-2 rounded-t-lg bg-gray-100 shadow-lg font-semibold hover:cursor-default";

    return(
        <>
            <nav>
                <ul className="list-none flex flex-row space-x-2">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? btnActiveClasses : btnInactiveClasses}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/goals" className={({isActive}) => isActive ? btnActiveClasses : btnInactiveClasses}>Goals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={({isActive}) => isActive ? btnActiveClasses : btnInactiveClasses}>Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/notes" className={({isActive}) => isActive ? btnActiveClasses : btnInactiveClasses}>Notes</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}