import { useState } from "react"
import { useNavigate } from "react-router-dom";

type Note = {
    title: string,
    text: string,
    category: string
}

export default function NotesForm(){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    let navigate = useNavigate();

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }

    const SubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const note:Note = {title: title, text: text, category: category};
        let notesList:Note[] = [];
        if(localStorage.getItem("notes")){
            notesList = JSON.parse(localStorage.getItem("notes")||"");
            notesList.push(note);
            localStorage.setItem("notes", JSON.stringify(notesList));
            navigate("/notes");
        }
        else{
            notesList = [note];
            localStorage.setItem("notes", JSON.stringify(notesList));
            navigate("/notes");
        }
    }

    return(
        <>
            <form method="POST" className="m-auto p-8 flex flex-col w-2/5 bg-gray-50 shadow-lg">
                <p className="text-center text-2xl">New note</p>
                <input className="my-6 p-4 bg-white rounded-sm shadow-md" onChange={changeTitle} type="text" value={title} placeholder="Title..."/>
                <select value={category} onChange={changeCategory} className="my-6 p-2 bg-white rounded-sm shadow-md">
                    <option selected>Category</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="School">School</option>
                    <option value="Brainstorming">Brainstorming</option>
                    <option value="Thoughts">Thoughts</option>
                    <option value="Journal">Journal</option>
                    <option value="Reasearch">Reasearch</option>
                    <option value="Inspiration">Inspiration</option>
                    <option value="Other">Other</option>
                </select>
                <textarea className="p-4 bg-white rounded-sm shadow-lg" onChange={changeText} value={text} rows={15} placeholder="..." />
                <button onClick={SubmitHandler} type="submit" className="rounded-sm my-6 py-2 bg-gray-500 text-white font-bold tracking-wider text-lg hover:bg-gray-400 " >Save</button>
            </form>
        </>
    )
}