"use client";

import { useState } from "react";
import { FaCheck, FaFilePdf, FaLinkedin, FaShare } from "react-icons/fa";

export default function AnalysePage() {
  const [annonce, setAnnonce] = useState("");
  const [resultats, setResultats] = useState<{
    resume: string;
    score: number;
    pointsForts: string[];
  } | null>(null);

  const analyserAnnonce = () => {
    // Simulation d&apos;une analyse
    setResultats({
      resume:
        "Appartement lumineux de 75m² situé dans un quartier résidentiel calme. Proche des commodités et des transports. Prix attractif pour le secteur.",
      score: 7.5,
      pointsForts: [
        "Surface généreuse",
        "Emplacement stratégique",
        "Prix compétitif",
        "État impeccable",
      ],
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                ImmoScanner AI
              </span>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                À propos
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Tarifs
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Connexion
              </a>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Essayer gratuitement
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Analyse ton annonce immobilière en 1 clic
            </h1>
          </div>

          <div className="space-y-6">
            <textarea
              value={annonce}
              onChange={(e) => setAnnonce(e.target.value)}
              placeholder="Collez ici une annonce immobilière..."
              className="w-full h-64 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            />

            <div className="text-center">
              <button
                onClick={analyserAnnonce}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Analyser l&apos;annonce
              </button>
              <p className="mt-2 text-sm text-gray-500">
                Aucune inscription requise
              </p>
            </div>
          </div>

          {/* Résultats */}
          {resultats && (
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Résumé de l&apos;annonce
                  </h2>
                  <p className="text-gray-600">{resultats.resume}</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {resultats.score}/10
                    </div>
                    <div className="text-gray-600">Score de rentabilité</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Points forts</h3>
                  <ul className="space-y-3">
                    {resultats.pointsForts.map((point, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FaShare className="w-5 h-5 mr-2" />
                    Partager
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FaFilePdf className="w-5 h-5 mr-2" />
                    Télécharger PDF
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Mentions légales
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 flex items-center"
              >
                <FaLinkedin className="w-5 h-5 mr-1" />
                Linkedin
              </a>
            </div>
            <div className="text-gray-600">© 2025 ImmoScanner AI</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
