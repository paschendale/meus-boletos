import { Inputable } from "@/components/ui/inputable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center align-middle min-h-[100vh]">
      <div className="flex flex-col items-center justify-center align-middle min-h-[100vh] w-[50%]">
        <Inputable />
      </div>
    </main>
  );
}
