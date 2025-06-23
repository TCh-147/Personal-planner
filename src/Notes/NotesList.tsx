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

    useEffect(() => {
        const notesString:string = localStorage.getItem("notes") || "";
        if(notesString !== ""){
            const notes: Note[] = JSON.parse(notesString||"");
            console.log("notes: ", notes)
            setNotesList(notes);
            if(notes.length > 0) setIsEmpty(false);
            console.log("notesList: ", notesList);
    }
    }, []);
    

    return(
        <>
            <Navigation/>
            <div className="my-2 p-8 bg-gray-100 shadow-lg">

                <div className="flex flex-row bg-white px-4">
                    <ul className="self-center">
                        <li><NavLink to='/new_note' className="rounded-sm px-6 py-2 bg-gray-700 align-middle text-white hover:bg-gray-600">New note</NavLink></li>
                    </ul>
                    <div className="rounded-sm self-center grid grid-cols-5 justify-items-end ml-auto w-1/3 px-2 py-4 shadow-sm">
                        <input type="text" className="col-span-4 w-5/6 text-right p-1 bg-gray-50 border-gray-200 shadow-md rounded-sm hover:bg-gray-100" placeholder="Search..."/>
                        <p className="self-center">Search icon</p>
                    </div>
                </div>

                <div>
                    <div className={`${isEmpty ? "hidden" : "hidden"}`}>
                        <p>Categorized notes</p>
                    </div>
                </div>

                <div className="my-8">
                    <div className={`${isEmpty ? "hidden" : "flex flex-col space-y-6"}`}>
                        <p>Unorginazied notes</p>
                        <div className="flex flex-row flex-wrap space-y-6">
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

            </div>
        </>
    )
}