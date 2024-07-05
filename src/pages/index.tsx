import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4">
        <h1>Hello</h1>
      </div>
    </main>
  );
}
