import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Video } from "@/components/Video";
import Image from "next/image";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home/>
        {/* <Video /> */}
        <Services />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
