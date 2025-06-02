import Image from "next/image";
import Drawing from "./Components/Drawing";
import InteractiveBg from "./Components/InteractiveBg";
import SecondBg from "./Components/SecondBg";
import Second from "./Components/Sections/Second";
import First from "./Components/Sections/First";

export default function Home() {
  return (
    <>
      <First />
      <Second />
    </>
  );
}

// <div>
  {/* <Drawing /> */}
  {/* <InteractiveBg />
  <SecondBg /> */}
// </div>