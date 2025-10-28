import { initGA, logPageView } from './utils/analytics';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import ImageWall from './components/ImageWall/ImageWall';
import RoomShowcase from './components/RoomShowcase/RoomShowcase';
import Amenities from './components/Amenities/Amenities';
import PricingPlans from './components/PricingPlans/PricingPlans';
import Gallery from './components/Gallery/Gallery';
import Stats from './components/Stats/Stats';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { WHATSAPP_CONFIG } from './data/constants';
import './App.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
    // Initialize Google Analytics
    initGA();
    logPageView();
  }, []);
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <ImageWall />
        <RoomShowcase />
        <Amenities />
        <PricingPlans />
        <Gallery />
        <Stats /> 
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <FloatingWhatsApp
        phoneNumber={WHATSAPP_CONFIG.phoneNumber}
        accountName={WHATSAPP_CONFIG.accountName}
        chatMessage={WHATSAPP_CONFIG.chatMessage}
        statusMessage={WHATSAPP_CONFIG.statusMessage}
        placeholder={WHATSAPP_CONFIG.placeholder}
        darkMode={WHATSAPP_CONFIG.darkMode}
        allowClickAway
        allowEsc
        notification
        notificationDelay={60000}
        notificationSound
      />
    </div>
  );
}

export default App;
