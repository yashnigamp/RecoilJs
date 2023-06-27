import { useRecoilState } from "recoil";
import { charAtom } from "../src/StoreComponent/atom";

export const About = () => {
  const [text] = useRecoilState(charAtom);
  return (
    <>
      <h1>About Us...</h1>
      <h4>{text}</h4>
    </>
  );
};
