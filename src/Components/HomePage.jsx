import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    title: 'Welcome to GetItDone',
    description:
      'A smart platform to connect people who need help with skilled doers. Post online or onsite jobs with budget and let others take them up — even partially.',
    bullets: [
      'Post tasks with clear budget',
      'Choose online or onsite work',
      'Split tasks among multiple doers',
      'Track and communicate easily',
    ],
    buttons: true,
  },
  {
    title: 'Find Skilled Doers Instantly',
    description:
      'From design to delivery — find talented people who are ready to take up your posted work. Reliable, fast, and budget-friendly.',
    bullets: [
      'Verified doers across India',
      'Ratings & public profiles',
      'Real-time job matching system',
    ],
  },
  {
    title: 'Let’s Get It Done!',
    description:
      'Ready to experience a better way to get things done? Join now and start posting or picking up jobs today!',
    buttons: true,
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 4000; // autoplay every 4 seconds

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => resetTimeout();
  }, [currentIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
   <div
  className="bg-cover bg-center text-white min-h-screen flex items-center justify-center px-4 py-10"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
  }}
>
      <div className="w-full max-w-4xl overflow-hidden relative">
        {/* Slide Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 px-6 py-10">
              <div className="bg-[#1d1d1d] rounded-xl px-12 py-8 shadow-xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-4">{slide.description}</p>
                {slide.bullets && (
                  <ul className="list-disc list-inside text-left max-w-md mx-auto mb-4">
                    {slide.bullets.map((bullet, i) => (
                      <li key={i} className="text-base md:text-lg">{bullet}</li>
                    ))}
                  </ul>
                )}
                {slide.buttons && (
                  <div className="mt-4 space-x-4">
                    <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                      Post a Task
                    </button>
                    <button className="bg-transparent border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                      Become a Doer
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Moved Outward) */}
        <button
          onClick={prevSlide}
          className="absolute -left-10 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-10 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
