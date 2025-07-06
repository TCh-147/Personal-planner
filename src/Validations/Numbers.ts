export default function Numbers(text: string) {
    if (text.match(/^[0-9]+$/)) {
        return true
    }
    else return false
}