import { Inter } from "next/font/google";
import Header from "../pages/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1>
      <Header />
    </h1>
  );
}
