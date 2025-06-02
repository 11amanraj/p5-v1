import Image from "next/image";
import Drawing from "./Components/Drawing";
import InteractiveBg from "./Components/InteractiveBg";

export default function Home() {
  return (
    <div>
      {/* <Drawing /> */}
      <InteractiveBg />
      <div className="bg-green-300 w-full h-screen">
        2nd Div
      </div>
    </div>
  );
}
