import Head from 'next/head'
import Link from 'next/link'
import PhotoGrid from '../components/PhotoGrid'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
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

      <main className="pt-24 pb-12 px-0 max-w-6xl mx-auto overflow-hidden">
        <h1 className="text-4xl font-bold mb-8 text-center px-4 dark:text-white">Featured Horses</h1>
        <PhotoGrid photos={samplePhotos} />
      </main>

      <footer className="bg-white dark:bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2023 OnlyHorses. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
