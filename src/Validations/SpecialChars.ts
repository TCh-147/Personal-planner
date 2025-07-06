export default function SpecialChars(text: string) {
    if (text.match(/[^\w\s]/)) {
        return true
    }
    else return false
}