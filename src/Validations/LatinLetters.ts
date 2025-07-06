export default function LatinLetters(text: string){
    if (text.match(/^[a-zA-Z]+$/)) {
        return true
    }
    else return false
}