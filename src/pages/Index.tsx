import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Call to Action Section */}
      <section className="py-20 gradient-coffee text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready for Your Coffee Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of coffee enthusiasts experiencing the future of café culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-gold text-lg px-8 py-4">
              Visit Our Menu
            </Link>
            <Link to="/contact" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-300">
              Find Our Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
