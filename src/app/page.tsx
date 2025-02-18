import type { NextPage } from 'next';
import FAQ from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import Services from './components/Services/services';
import Testimonials from './components/Testimonials/testimonials';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CTA from './components/CTA/cta';
import Hero from './components/Hero/hero';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
     <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      {/* <Blog /> */}
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
