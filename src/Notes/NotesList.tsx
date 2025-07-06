import { useEffect, useState } from "react";
import Navigation from "../CommonComponents/Navigation";
import { NavLink } from "react-router-dom";

type Note = {
    title: string,
    text: string,
    category: string
}

export default function NotesList(){
    const [isEmpty, setIsEmpty] = useState(true);
    const [notesList, setNotesList] = useState<Note[]>([]);
    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState<Note[]>([]);

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log("Search: " + search);
    }

    useEffect(() => {
        const notesString:string = localStorage.getItem("notes") || "";
        if (notesString !== "") {
            const notes: Note[] = JSON.parse(notesString||"");
            setNotesList(notes);
            if(notes.length > 0) setIsEmpty(false);
        }
    }, []);

    const SearchHandler = () => {
        let searchResult: Note[] = [];
        notesList.forEach(note => {
            if (note.text.includes(search) || note.title.includes(search)) 
            {
                console.log("Note: " + note);
                searchResult.push(note);
            }
        });
        setSearchList(searchResult);
        console.log("Search result list: " + searchResult);
    }
    

    return(
        <>
            <Navigation/>
            <div className="my-2 p-8 bg-gray-100 shadow-lg">

                <div className="flex flex-row bg-white px-4">
                    <ul className="self-center">
                        <li><NavLink to='/new_note' className="rounded-sm px-6 py-2 bg-gray-700 align-middle text-white hover:bg-gray-600">New note</NavLink></li>
                    </ul>
                    <div className="rounded-sm self-center grid grid-cols-5 justify-items-end ml-auto w-1/3 px-2 py-4 shadow-sm">
                        <input type="text" value={search}  onChange={changeSearch} className="col-span-4 w-5/6 text-right py-1 px-4 bg-gray-50 border-gray-200 shadow-md rounded-sm hover:bg-gray-100" placeholder="Search..."/>
                        <button type="button" onClick={SearchHandler} className="self-center">Search icon</button>
                    </div>
                </div>

                <div>
                    <div className={`${isEmpty ? "" : "hidden"}`}>
                        <p className="p-6 italic">No records...</p>
                    </div>
                </div>

                <div className="my-8">
                    <div className={`${isEmpty ? "hidden" : "flex flex-col space-y-6"} ${searchList.length >= 1 ? "hidden" : ""}`}>
                        <p>Unorginazied notes</p>
                        <div className="flex flex-row flex-wrap space-y-6 ">
                            {
                                notesList.map(({title, text, category}, index) => (
                                    <div key={index} className="p-6 m-6 bg-gray-200 max-w-sm">
                                        <p className="font-bold">{title}</p>
                                        <p className="italic">{category}</p>
                                        <p className="break-all">{text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <div className={`${isEmpty ? "hidden" : "flex flex-col space-y-6"} ${searchList.length >= 1 ? "" : "hidden"}`}>
                        <p>Search result</p>
                        <div className="flex flex-row flex-wrap space-y-6 ">
                            {
                                searchList.map(({title, text, category}, index) => (
                                    <div key={index} className="p-6 m-6 bg-gray-200 max-w-sm">
                                        <p className="font-bold">{title}</p>
                                        <p className="italic">{category}</p>
                                        <p className="break-all">{text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}