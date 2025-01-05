import "./App.css";
import BirthdayHeading from "./components/shared/birthday-heading";
import ContainerImage from "./components/shared/container-image";
import ScrollImage from "./components/shared/scroll-images";
import VideoHero from "./components/shared/video-hero";

function App() {
  return (
    <main className="min-h-screen antialiased bg-gradient-to-b from-blue-500 to-red-400">
      <BirthdayHeading />
      <ContainerImage />
      <ScrollImage />
      <VideoHero />
    </main>
  );
}

export default App;
