import { useState } from 'react';
import Navbar from '@/components/Navbar';
import heroImage from '@/assets/hero-coffee-shop.jpg';
import latteArtImage from '@/assets/latte-art.jpg';
import coffeeBeansImage from '@/assets/coffee-beans.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroImage,
      alt: 'Modern coffee shop interior',
      category: 'Interior'
    },
    {
      src: latteArtImage,
      alt: 'Beautiful latte art',
      category: 'Coffee Art'
    },
    {
      src: coffeeBeansImage,
      alt: 'Premium coffee beans',
      category: 'Beans'
    },
    {
      src: heroImage,
      alt: 'Barista at work',
      category: 'Process'
    },
    {
      src: latteArtImage,
      alt: 'Signature espresso',
      category: 'Coffee Art'
    },
    {
      src: coffeeBeansImage,
      alt: 'Coffee roasting process',
      category: 'Process'
    },
    {
      src: heroImage,
      alt: 'Cozy seating area',
      category: 'Interior'
    },
    {
      src: latteArtImage,
      alt: 'Cold brew preparation',
      category: 'Process'
    },
    {
      src: coffeeBeansImage,
      alt: 'Single origin beans',
      category: 'Beans'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            Visual Tour
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the aesthetic beauty of Koe-The Kafe through our curated gallery
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    <p className="font-medium">{image.alt}</p>
                    <p className="text-sm opacity-75">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 360° Tour CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-coffee">
            <div className="text-6xl mb-4">🏪</div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Take a Virtual Tour
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience our space from anywhere with our immersive 360° virtual tour
            </p>
            <button className="btn-coffee text-lg px-8 py-4">
              Start Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;