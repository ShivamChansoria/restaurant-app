import About from '../Sections/About';
import Footer from '../Sections/Footer';
import Hero from '../Sections/Hero';
import Menu from '../Sections/Menu';
import Navbar from '../Sections/Navbar';
import Qualities from '../Sections/Qualities';
import { Toaster } from 'react-hot-toast';
import Reservation from '../Sections/Reservation';

const Home = () => {
    return (
        <>
      <div><Toaster/></div>
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <Reservation />
            <Qualities />
            <Footer />
        </>
    );
}

export default Home;
