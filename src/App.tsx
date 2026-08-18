import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Signatures } from './components/Signatures';
import { FeaturedExperience } from './components/FeaturedExperience';
import { Menu } from './components/Menu';
import { ComeHungry } from './components/ComeHungry';
import { PhotoStory } from './components/PhotoStory';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="grain min-h-screen bg-bone-50">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Signatures />
        <FeaturedExperience />
        <Menu />
        <ComeHungry />
        <PhotoStory />
        <Reviews />
        <Reservation />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
