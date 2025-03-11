import Head from 'next/head'
import Link from 'next/link'
import PhotoGrid from '../components/PhotoGrid'
import ThemeToggle from '../components/ThemeToggle'
import AgeVerification from '../components/AgeVerification'
import { useState, useEffect } from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Home() {
  const [isAgeVerified, setIsAgeVerified] = useState(true);  // Default to true for SSR

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified') === 'true';
    setIsAgeVerified(verified);
  }, []);

  const samplePhotos = [
    { id: 1, url: '/horse1.jpg', description: 'Horse in meadow' },
    { id: 2, url: '/horse2.jpg', description: 'Racing horse' },
    { id: 3, url: '/horse3.jpg', description: 'Horse portrait' },
    { id: 4, url: '/horse4.jpg', description: 'Horse family' },
    { id: 5, url: '/horse5.jpg', description: 'Wild horse' },
    { id: 6, url: '/horse6.jpg', description: 'Horse jumping' },
    { id: 7, url: '/horse7.jpg', description: 'Horse running' },
    { id: 8, url: '/horse8.jpg', description: 'Horse grazing' },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Head>
        <title>OnlyHorses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {!isAgeVerified && <AgeVerification onVerify={setIsAgeVerified} />}
      
      <div className={!isAgeVerified ? 'blur-sm' : ''}>
        <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold dark:text-white">OnlyHorses.net</div>
              <div className="h-12 w-12 flex items-center justify-center p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div className="relative h-96 w-full">
          <div className="absolute inset-0">
            <img
              src="/hero-banner.jpg"
              alt="Beautiful horse running in sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">Welcome to OnlyHorses</h1>
              <p className="text-xl text-white mb-8">Discover the majestic world of horses</p>
              <div className="flex space-x-6 justify-center">
                <a href="https://facebook.com" className="text-white hover:text-blue-400 transition-colors">
                  <FaFacebook className="w-8 h-8" />
                </a>
                <a href="https://twitter.com" className="text-white hover:text-blue-400 transition-colors">
                  <FaTwitter className="w-8 h-8" />
                </a>
                <a href="https://instagram.com" className="text-white hover:text-pink-400 transition-colors">
                  <FaInstagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <main className="py-12 px-0 max-w-6xl mx-auto overflow-hidden">
          <h1 className="text-4xl font-bold mb-8 text-center px-4 dark:text-white">Mayo</h1>
          <PhotoGrid photos={samplePhotos} />
        </main>

        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 dark:text-white">About OnlyHorses</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Welcome to OnlyHorses, your premier destination for everything equine. Our platform celebrates the grace, 
                power, and beauty of horses through stunning photography and engaging content.
              </p>
              <p>
                Whether you're an experienced equestrian or simply an admirer of these magnificent creatures, 
                OnlyHorses provides a space where horse enthusiasts can come together to share their passion.
              </p>
              <p>
                Join our growing community today and explore the wonderful world of horses through the lens of 
                talented photographers and storytellers from around the globe.
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-white dark:bg-gray-800 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 OnlyHorses. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
