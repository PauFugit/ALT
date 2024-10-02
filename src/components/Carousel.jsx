'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/carouseltres.png',
  '/carouseldos.png',
  '/carouseluno.png'
]

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[600px]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Carousel image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Our Site</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Discover amazing features and services</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}