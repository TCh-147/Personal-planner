export default function MaxWordCount(text: string, maxWordCount: number) {
    const words = text.match(/\b\w+\b/)?.length;
    
    return words ? words > maxWordCount : false
}