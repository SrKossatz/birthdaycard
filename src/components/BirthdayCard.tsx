import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Star, Sparkles, Heart } from 'lucide-react';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    // Mantém a div externa original, apenas enfatizando centralização
    <div className="flex justify-center items-center w-full h-full">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      {/* Ajuste para centralizar, mantendo mais do código original possível */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="w-full max-w-lg perspective-1000"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <motion.div
          className="relative w-full"
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of the card */}
          <motion.div
            className={`absolute top-1/2 w-full ${isOpen ? 'pointer-events-none' : ''}`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div 
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer group h-[500px]"
              onClick={handleOpen}
            >
              <img 
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80" 
                alt="Birthday celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-2 mb-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.2, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-yellow-300" />
                    </motion.div>
                    <Star className="w-8 h-8 text-yellow-300" />
                    <motion.div
                      animate={{ 
                        rotate: [0, -15, 15, 0],
                        scale: [1, 1.2, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-yellow-300" />
                    </motion.div>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2 font-serif">Happy Birthday!</h1>
                  <p className="text-white/80 text-lg">Clique para abrir a mensagem...</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Back of the card */}
          <motion.div
            className="absolute w-full"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 h-[500px] flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center space-y-6 w-full"
              >
                <div className="flex justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <Heart className="w-16 h-16 text-pink-500" />
                  </motion.div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 font-serif">
                  Seu dia especial
                </h2>
                
                <div className="space-y-4 text-gray-600 leading-relaxed max-w-md mx-auto">
                  <p className="text-lg">
                    Hoje celebramos um dia especial, o dia do seu nascimento. Quero que saiba o quanto você é importante para mim e o quanto sou grato por ter você na minha vida. Obrigado por ser essa mulher e mãe incrivel.
                  </p>
                  <p className="text-lg">
                    Feliz aniversário.
                  </p>
                  <p className="text-xl font-semibold text-pink-500 mt-6">
                    Te amo! 🎉
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}