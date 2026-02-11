import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Objective from './components/Objective';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Ecosystem from './components/Ecosystem';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-background text-text-primary font-sans">
            <Navbar />
            <main className="pt-20">
                <Hero />
                <About />
                <Objective />
                <Services />
                <Differentials />
                <Ecosystem />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
