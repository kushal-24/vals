import { Heart, ArrowLeft, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

import rose from "../assets/rose.jpg";

import song from "../assets/song.mp3"

function NotePage({ onBack }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const triggerConfetti = () => {
    setShowConfetti(true);

    // stop after 4 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-300 via-purple-300 to-rose-300 relative overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <Heart
          key={i}
          className="floating-heart absolute text-red-400 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${15 + Math.random() * 25}px`,
            height: `${15 + Math.random() * 25}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
          fill="currentColor"
        />
      ))}

      {[...Array(15)].map((_, i) => (
        <Sparkles
          key={`sparkle-${i}`}
          className="sparkle absolute text-yellow-300 opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="absolute top-0 left-0 right-0 flex justify-center gap-3 p-6">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="balloon"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <Heart className="text-pink-500 w-10 h-10" fill="currentColor" />
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5 text-purple-600" />
        <span className="text-purple-600 font-semibold">Back</span>
      </button>

      {/* Rotating CD Music Player */}
      <div className="absolute top-20 right-4 sm:top-24 sm:right-16 z-20 flex flex-col items-center gap-2 sm:gap-3">
        <div className={`cd ${isPlaying ? "spin" : ""}`}>
          <div className="cd-inner">
            {[...Array(6)].map((_, i) => (
              <Heart
                key={i}
                className="cd-heart"
                fill="currentColor"
                style={{
                  transform: `rotate(${i * 60}deg) translate(45px)`,
                }}
              />
            ))}
            <div className="cd-center" />
          </div>
        </div>

        <button
          onClick={toggleMusic}
          className="px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md hover:scale-105 transition"
        >
          {isPlaying ? "Pause ❤️" : "Play 🎵"}
        </button>

        <audio ref={audioRef} loop>
          <source src={song} type="audio/mpeg" />
        </audio>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 pt-40 pb-24">
        <div className="note-card max-w-2xl w-full bg-linear-to-br from-pink-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-300 relative animate-scale-in">
          <div className="absolute -top-16 -left-6 sm:-top-10 sm:-left-8 w-32 h-32 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-xl animate-bounce-slow">
            <img src={rose} alt="rose" className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute -top-4 -right-4 w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center shadow-xl animate-bounce-slow"
            style={{ animationDelay: "0.5s" }}
          >
            <Heart className="w-10 h-10 text-white" fill="currentColor" />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
              Yay! 🎉
            </h2>
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 text-red-500 animate-pulse"
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6 text-gray-700">
            <div className="bg-white/70 rounded-2xl p-6 shadow-md border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-pink-600 mb-3 flex items-center gap-2">
                <Heart className="w-6 h-6" fill="currentColor" />
                My Manuuu
              </h3>
              <p className="text-lg leading-relaxed">
                First of all, HIEEEEEE, I knew you'd come here onlyy hehehe,
                Happy Valentine's my cutuuuu princesss 💜
              </p>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 shadow-md border-2 border-purple-200">
              <p className="text-lg leading-relaxed mb-4">
                I lovee youu veryy veryy muchh!! I want to stayy with youu
                forever and forever... Youu think and I also thought that the
                day since youu confessed was a dream come true but it was not
                only a dream come true, it was start of another dream lifeee 🥹
                I'm very grateful for youu ✨, Lets stay together ALWAYS AND
                FOREVER 🧿🧿🧿
              </p>
              <p className="text-lg leading-relaxed">
                I have loved every second spent with youu and I wish to spend
                more and more of those, soo Manasvi, my princess, I ask youu
                again to be my valentine 🫴🏻🥹
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={triggerConfetti}
                className="px-8 py-3 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition"
              >
                YESS ONLY 💖
              </button>
            </div>

            <div className="bg-linear-to-r from-pink-100 to-purple-100 rounded-2xl p-6 shadow-md border-2 border-pink-300 text-center">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-pink-500 mb-2">
                Forever Yours 💕
              </p>
              <p className="text-3xl font-cursive text-purple-600">
                With all my love ❤️
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className="w-8 h-8 text-red-400 animate-pulse"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {showConfetti && (
        <div className="confetti-container">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: [
                  "#ff4d6d",
                  "#ff85a1",
                  "#ffd166",
                  "#c77dff",
                  "#80ed99",
                ][Math.floor(Math.random() * 5)],
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-25px) rotate(3deg); }
        }

        @keyframes balloon-float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        @keyframes sparkle-twinkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 0.3; }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .floating-heart { animation: float infinite ease-in-out; }
        .balloon { animation: balloon-float 3s infinite ease-in-out; }
        .sparkle { animation: sparkle-twinkle 2s infinite ease-in-out; }
        .note-card { animation: scale-in 0.6s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite ease-in-out; }

        .font-cursive {
          font-family: 'Brush Script MT', cursive;
        }
        
        .cd {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: radial-gradient(circle at center, #fff 10%, #f472b6 40%, #ec4899 70%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        @media (min-width: 640px) {
          .cd {
            width: 120px;
            height: 120px;
          }
        }
            
                    
        .cd-inner {
          width: 70px;
          height: 70px;
          }
            
        @media (min-width: 640px) {
          .cd-inner {
            width: 100px;
            height: 100px;
          }
        } 
        .cd-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .cd-heart {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          color: white;
          transform-origin: center;
        }
        
        .spin {
          animation: cd-spin 3s linear infinite;
        }
        
        @keyframes cd-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }


        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 999;
        }
        
        .confetti {
          position: absolute;
          top: -10px;
          width: 8px;
          height: 14px;
          opacity: 0.9;
          animation: confetti-fall 3s linear forwards;
        }
        
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
          }
        }
        
        
      `}</style>
    </div>
  );
}

export default NotePage;
