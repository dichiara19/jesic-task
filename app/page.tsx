"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, Zap, Clock, Award, 
  Users, DollarSign, ChevronDown, 
  Code, Cpu, Database, Layers,
  Coffee, BookOpen, Target, Glasses, Check
} from 'lucide-react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-30 pointer-events-none"
    />
  );
};

const FinancialTechEventPage = () => {
  const [activeSection, setActiveSection] = useState('evento');

  const techSections = [
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: "Algoritmi finanziari",
      description: "Scopri come l'intelligenza artificiale e l'machine learning rivoluzionano gli investimenti"
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "Data Science",
      description: "Analisi predittive e modelli matematici per prevedere trend di mercato"
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: "Blockchain & Fintech",
      description: "Tecnologie innovative che stanno trasformando il mondo finanziario"
    },
    {
      icon: <Layers className="w-12 h-12 text-red-500" />,
      title: "Architetture Cloud",
      description: "Gestione distribuita e sicura dei dati finanziari"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-800 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <DollarSign className="w-10 h-10 text-blue-400" />
            <span className="text-2xl font-bold text-white">UniFinanza Tech</span>
          </div>
          <nav className="flex space-x-6">
            {['Evento', 'Tecnologie', 'Iscrizione'].map((section) => (
              <button 
                key={section}
                onClick={() => setActiveSection(section.toLowerCase())}
                className="hover:text-blue-300 transition-colors"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="container mx-auto px-6 z-10">
          <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Finanza incontra tecnologia
          </h1>
          <p className="text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Un evento rivoluzionario dove innovazione digitale e strategie finanziarie si incontrano
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
              Iscriviti Ora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
              Scopri di Più
            </button>
          </div>
        </div>
      </section>

      {/* Sezione Tecnologie */}
      <section className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Tecnologie innovative nel mondo finanziario
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {techSections.map((section, index) => (
              <div 
                key={index} 
                className="bg-gray-700 p-6 rounded-lg text-center transform transition hover:scale-105 hover:shadow-2xl"
              >
                {section.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iscrizione */ }
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Registrati all'evento
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-700 p-8 rounded-xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Nome</label>
                    <input 
                      type="text"
                      className="w-full bg-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Cognome</label>
                    <input 
                      type="text"
                      className="w-full bg-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full bg-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="La tua email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Azienda/Organizzazione/Università</label>
                  <input 
                    type="text"
                    className="w-full bg-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Nome dell'azienda"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Ruolo</label>
                  <select className="w-full bg-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option value="">Seleziona il tuo ruolo</option>
                    <option value="developer">Sviluppatore</option>
                    <option value="manager">Manager</option>
                    <option value="analyst">Analista Finanziario</option>
                    <option value="student">Studente</option>
                    <option value="other">Altro</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
                >
                  Invia registrazione
                </button>

                <p className="text-sm text-gray-400 text-center mt-4">
                  Registrandoti accetti i nostri Termini e Condizioni e la nostra Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Programma */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Programma della giornata
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Coffee className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">09:30 - Welcome Coffee</h3>
                </div>
                <p className="text-gray-400">
                  Momento di accoglienza e registrazione con welcome coffee per conoscersi in un'atmosfera informale.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold">10:00 - Workshop Formativi</h3>
                </div>
                <p className="text-gray-400">
                  Esperti di Mediolanum e Intesa San Paolo condurranno sessioni su gestione del budget, strategie di risparmio e tecnologie digitali nel mondo finanziario.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold">14:30 - Business Game</h3>
                </div>
                <p className="text-gray-400">
                  Sfida interattiva in team con simulazioni di scenari finanziari reali, gestione di portafogli virtuali e problem solving guidato da esperti.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Glasses className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold">17:30 - Aperitivo Networking</h3>
                </div>
                <p className="text-gray-400">
                  Conclusione con aperitivo per networking e confronto diretto con i professionisti del settore.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Dettagli partecipazione</h3>
            </div>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Evento gratuito
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Limitato a 50 studenti
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Materiale didattico incluso
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Attestato di partecipazione
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Le voci dei partecipanti</h2>
            <p className="text-gray-400">Scopri le esperienze di chi ha partecipato alle edizioni precedenti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                <h4 className="text-xl font-semibold">Marco Bianchi</h4>
                <p className="text-gray-400">Studente di economia</p>
              </div>
              <p className="text-gray-300 italic">
                "Un'esperienza formativa incredibile. Ho acquisito competenze pratiche che non avrei mai potuto imparare solo dai libri. Il business game è stato illuminante!"
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-500 mb-4"></div>
                <h4 className="text-xl font-semibold">Laura Rossi</h4>
                <p className="text-gray-400">Neolaureata in finanza</p>
              </div>
              <p className="text-gray-300 italic">
                "Gli speaker sono stati eccezionali e il networking finale mi ha permesso di stabilire contatti preziosi. Ora lavoro proprio in una delle aziende partner dell'evento!"
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 mb-4"></div>
                <h4 className="text-xl font-semibold">Andrea Verdi</h4>
                <p className="text-gray-400">Studente di informatica</p>
              </div>
              <p className="text-gray-300 italic">
                "La fusione tra finanza e tecnologia presentata durante l'evento mi ha aperto gli occhi su nuove opportunità di carriera. Assolutamente consigliato!"
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          {/* Links e Social */}
          <div className="grid md:grid-cols-4 gap-8 mb-8 text-left">
            <div>
              <h4 className="text-white font-semibold mb-4">Chi siamo</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">La nostra storia</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Risorse</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Newsletter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded flex-1"
                />
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition">
                  Iscriviti
                </button>
              </div>
            </div>
          </div>

          {/* Icone e Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0 text-gray-400">
                <TrendingUp className="w-8 h-8 hover:text-blue-500 transition cursor-pointer" />
                <Award className="w-8 h-8 hover:text-green-500 transition cursor-pointer" />
                <Zap className="w-8 h-8 hover:text-yellow-500 transition cursor-pointer" />
              </div>
              <p className="text-gray-500">© 2024 UniFinanza Tech Event. Tutti i diritti riservati.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinancialTechEventPage;