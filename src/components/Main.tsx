import About from './About';
import Cards from './Cards';
// import Export from './Export';
import Hero from './Hero';
import Order from './Order';
import Question from './Question';

export default function Main() {
  return (
    <main>
      <Hero />
      <Order />
      <Cards />
      {/* <Export /> */}
      <About />
      <Question />
    </main>
  );
}
