import About from "@/components/About/About";
import Book from "@/components/Books/Book";
import LandingPage from "@/components/Landing/LandingPage";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
        <div class="grey-lines" />
        <div class="grey-lines" />
        <div class="grey-lines" />
      
      <Navbar />
      <LandingPage />

      <Book/>

      <About />
    </main>
  );
}
