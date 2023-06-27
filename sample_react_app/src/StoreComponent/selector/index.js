import { selector } from "recoil";
import { charAtom } from "../atom";

export const charLengthSelector = selector({
    key: "charlength",
    get: ({get})=> {
        const text = get(charAtom);
        console.log("🚀 ~ file: index.js:8 ~ text:", text)
        return text.length;
    }
})