import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

function LandingPage({ onYesClick }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ top: newY, left: newX });
    setIsNoButtonMoved(true);
  };

  useEffect(() => {
    const hearts = document.querySelectorAll(".floating-heart");
    hearts.forEach((heart, index) => {
      heart.style.animationDelay = `${index * 0.5}s`;
      heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 relative overflow-hidden">

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className="floating-heart absolute text-pink-500 opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
          }}
          fill="currentColor"
        />
      ))}

      {/* Top Balloons */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-3 sm:gap-4 p-4 sm:p-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="balloon" style={{ animationDelay: `${i * 0.3}s` }}>
            <Heart className="text-red-400 w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Image Collage */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <div className="absolute top-[22%] sm:top-[12%] left-[4%] sm:left-[6%]
          w-36 sm:w-56 md:w-72
          h-48 sm:h-72 md:h-80
          rotate-[-6deg] sm:rotate-[-12deg]
          rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={img1} className="w-full h-full object-cover" />
        </div>

        <div className="absolute bottom-[14%] sm:bottom-[10%] left-[6%] sm:left-[10%]
          w-32 sm:w-52 md:w-64
          h-48 sm:h-72 md:h-80
          rotate-[4deg] sm:rotate-[8deg]
          rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={img2} className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-[24%] sm:top-[14%] right-[4%] sm:right-[8%]
          w-36 sm:w-56 md:w-72
          h-48 sm:h-72 md:h-84
          -rotate-[6deg] sm:-rotate-[-10deg]
          rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={img3} className="w-full h-full object-cover" />
        </div>

        <div className="absolute bottom-[10%] sm:bottom-[8%] right-[2%] sm:right-[4%]
          w-40 sm:w-64 md:w-80
          h-56 sm:h-80 md:h-96
          -rotate-[4deg] sm:-rotate-[6deg]
          rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={img4} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 pt-28 sm:pt-16">

        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-purple-600 to-pink-600 mb-3 sm:mb-4 animate-pulse-slow">
            Will You Be My
          </h1>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-500 via-pink-500 to-purple-500 drop-shadow-2xl animate-bounce-slow">
            Valentine? 💕
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center relative">

          <button
            onClick={onYesClick}
            className="px-12 sm:px-16 py-6 sm:py-8 bg-linear-to-r from-pink-500 to-red-500 text-white text-2xl sm:text-3xl md:text-4xl font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
          >
            YES! 💖
          </button>

          {!isNoButtonMoved ? (
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="px-12 sm:px-16 py-6 sm:py-8 bg-linear-to-r from-gray-400 to-gray-500 text-white text-2xl sm:text-3xl md:text-4xl font-bold rounded-full shadow-2xl transition-all duration-200"
            >
              No
            </button>
          ) : (
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="fixed px-12 sm:px-16 py-6 sm:py-8 bg-linear-to-r from-gray-400 to-gray-500 text-white text-2xl sm:text-3xl md:text-4xl font-bold rounded-full shadow-2xl transition-all duration-300 z-50"
              style={{
                top: `${noButtonPosition.top}px`,
                left: `${noButtonPosition.left}px`,
              }}
            >
              No
            </button>
          )}
        </div>

        <p className="mt-8 sm:mt-12 text-purple-600 text-lg sm:text-xl md:text-2xl font-semibold animate-pulse">
          Choose wisely... 😉
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%,100%{transform:translateY(0) rotate(0deg);}
          25%{transform:translateY(-20px) rotate(5deg);}
          50%{transform:translateY(-10px) rotate(-5deg);}
          75%{transform:translateY(-25px) rotate(3deg);}
        }
        @keyframes balloon-float {
          0%{transform:translateY(0);}
          50%{transform:translateY(-30px) rotate(10deg);}
          100%{transform:translateY(0);}
        }
        @keyframes pulse-slow {
          0%,100%{opacity:1;}
          50%{opacity:0.8;}
        }
        @keyframes bounce-slow {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-10px);}
        }
        @keyframes fade-in {
          from{opacity:0;transform:translateY(-20px);}
          to{opacity:1;transform:translateY(0);}
        }

        .floating-heart { animation: float infinite ease-in-out; }
        .balloon { animation: balloon-float 3s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 2s infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </div>
  );
}

export default LandingPage;
