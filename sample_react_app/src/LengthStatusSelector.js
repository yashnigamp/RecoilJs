import { useRecoilValue } from "recoil"
import { charLengthSelector } from "./StoreComponent/selector"

export const LengthSelector = ()=> {

    const value = useRecoilValue(charLengthSelector);

    return (
        <>
        <h5>{value}</h5>
        </>
    )
}