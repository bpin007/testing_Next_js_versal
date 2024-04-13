import Image from "next/image";
import Firstpage from "./components/Firstpage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      
      <h1 className="text-3xl font-bold mb-8">Hello World! Welcome to the first Next js</h1>
      <Firstpage />
    </main>
  );
}
