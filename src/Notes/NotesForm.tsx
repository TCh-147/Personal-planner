import { useState } from "react"
import { useNavigate } from "react-router-dom";
import EmptyField from "../Validations/EmptyField";
import MaxWordCount from "../Validations/MaxWordCount";
import SpecialChars from "../Validations/SpecialChars";

type Note = {
    title: string,
    text: string,
    category: string
}

export default function NotesForm(){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [emptyErrorCategory, setEmptyErrorCategory] = useState(false);
    const [emptyErrorTitle, setEmptyErrorTitle] = useState(false);
    const [emptyErrorText, setEmptyErrorText] = useState(false); 
    const [titleWordCountError, setTitleWordCountError] = useState(0);
    const [textWordCountError, setTextWordCountError] = useState(0);

    const titleMaxWordCount: number = 20;
    const textMaxWordCount: number = 350 ;
    let navigate = useNavigate();

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        const words = title.trim().split(/\s+/);
        setTitleWordCountError(words.length > 0 ? words.length : 0);
        setEmptyErrorTitle(false);
    }

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        const words = text.trim().split(/\s+/);
        setTextWordCountError(words.length > 0 ? words.length : 0);
        setEmptyErrorText(false);
    }

    const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
        setEmptyErrorCategory(false);
    }

    function EmptyFields(){
            let validate: boolean = true;
            validate = EmptyField(title);
            if(validate) setEmptyErrorTitle(true);
            validate = EmptyField(text);
            if(validate) setEmptyErrorText(true);
            validate = EmptyField(category);
            if(validate) setEmptyErrorCategory(true);

            return validate
        }

    const SubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const emptyFields: boolean = EmptyFields();

        try {
            let validate = true;

            if (emptyFields) validate = false;
            if (SpecialChars(title)) validate = false;
            if (MaxWordCount(title, titleMaxWordCount)) validate = false;
            if (MaxWordCount(text, textMaxWordCount)) validate = false;
            
            if (!validate) return

            const note:Note = {title: title, text: text, category: category};
            const storageList = localStorage.getItem("notes");
            let notesList:Note[] = [];

            if (storageList) {
                notesList = JSON.parse(storageList);
                notesList.push(note);
                localStorage.setItem("notes", JSON.stringify(notesList));
                navigate("/notes");
            }
            else {
                notesList = [note];
                localStorage.setItem("notes", JSON.stringify(notesList));
                navigate("/notes");
            }

        } catch (error) {
            alert("New note entry unsuccessful");
        }

    }

    return(
        <>
            <form method="POST" className="m-auto p-8 flex flex-col w-2/5 bg-gray-50 shadow-lg">
                <p className="text-center text-2xl">New note</p>
                <input className={`mt-6 p-4 bg-white rounded-sm shadow-md ${emptyErrorTitle ? "border-2 border-red-600" : ""} ${titleWordCountError > 20 ? "border-2 border-red-600" : ""}`} onChange={changeTitle} type="text" value={title} placeholder="Title..."/>
                <p className={`pb-2 ${SpecialChars(title) ? "text-red-600" : "hidden"}`}>Title cannot have any special characters.</p>
                <p className={`text-right ${titleWordCountError > titleMaxWordCount ? "text-red-600" : ""}`}>{titleWordCountError}/{titleMaxWordCount}</p>
                <p className={`pb-2 ${emptyErrorTitle ? "text-red-600" : "hidden"}`}>Please, enter a title!</p>
                <p className={`pb-2 ${titleWordCountError > titleMaxWordCount ? "text-red-600" : "hidden"}`}>Title is too long!</p>
                <select value={category} onChange={changeCategory} className={`${emptyErrorCategory ? " border-2 border-red-600" : ""} my-6 p-2 bg-white rounded-sm shadow-md hover:cursor-pointer`}>
                    <option value="" className="text-gray-500">Category</option>
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
                <p className={`pb-2 ${emptyErrorCategory ? "text-red-600" : "hidden"}`}>Please, choose a category!</p>
                <textarea className={`p-4 bg-white rounded-sm shadow-lg ${emptyErrorText ? "border-2 border-red-600" : ""} ${textWordCountError > 350 ? "border-2 border-red-600" : ""}`} onChange={changeText} value={text} rows={15} placeholder="..." />
                <p className={`text-right ${textWordCountError > textMaxWordCount ? "text-red-600" : ""}`}>{textWordCountError}/{textMaxWordCount}</p>
                <p className={`${textWordCountError > textMaxWordCount ? "text-red-600" : "hidden"}`}>Text is too long!</p>
                <p className={`pb-2 ${emptyErrorText ? "text-red-600" : "hidden"}`}>Please, enter text!</p>
                <button onClick={SubmitHandler} type="submit" className="rounded-sm my-6 py-2 bg-gray-500 text-white font-bold tracking-wider text-lg hover:bg-gray-400 " >Save</button>
            </form>
        </>
    )
}