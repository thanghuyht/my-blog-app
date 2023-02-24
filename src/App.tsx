import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Explore from './components/pages/Explore';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';
import Library from './components/pages/Library';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/library" element={<Library />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
