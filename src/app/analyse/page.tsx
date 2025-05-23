"use client";

import OpenAI from "openai";
import { useState } from "react";
import { FaCheck, FaExclamationTriangle, FaLinkedin } from "react-icons/fa";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function AnalysePage() {
  const [annonce, setAnnonce] = useState("");
  const [resultats, setResultats] = useState<{
    resume: string;
    score: number;
    pointsForts: string[];
    risques: string[];
    potentiel: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const analyserAnnonce = async () => {
    setLoading(true);
    try {
      const prompt = `Tu es un expert en investissement immobilier locatif.   
  
  Analyse l'annonce immobilière suivante comme si tu parlais à un investisseur.  
  1. Résume brièvement le bien (type, localisation, surface, nombre de pièces, étage, etc). 
  2. Déduis les points positifs de cette annonce (emplacement, rendement, état du bien, etc). 
  3. Identifie les points à vérifier ou les risques potentiels (charges, vacance, rénovation, etc). 
  4. Estime le potentiel locatif ou la rentabilité si des informations suffisantes sont disponibles.
  5. Un score de rentabilité sur 10 
  
  Tu vas retourner ces informations sous format json tel que:
  - Le resumé sera la valeur de la clé "resume"
  - Les points positifs seront la valeur de la clé "pointsPositifs"
  - Les risques seront la valeur de la clé "risques"
  - Le potentiel sera la valeur de la clé "potentiel"
  - Le score sera la valeur de la clé "score"
  
  Annonce : ${annonce}`;

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Tu es un expert en analyse immobilière. Tu dois analyser des annonces immobilières et fournir une évaluation objective.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      });

      const response = completion.choices[0].message.content;
      if (!response) return;

      const result = JSON.parse(response);
      setResultats({
        resume: result.resume,
        score: result.score,
        pointsForts: result.pointsPositifs,
        risques: result.risques,
        potentiel: result.potentiel,
      });
    } catch (error) {
      console.error("Erreur lors de l'analyse:", error);
    } finally {
      setLoading(false);
    }
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
                disabled={loading}
                className={`px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Analyse en cours..." : "Analyser l'annonce"}
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

                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Risques à considérer
                  </h3>
                  <ul className="space-y-3">
                    {resultats.risques.map((risque, index) => (
                      <li key={index} className="flex items-center">
                        <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                        <span className="text-gray-600">{risque}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Potentiel locatif
                  </h3>
                  <p className="text-gray-600">{resultats.potentiel}</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {resultats.score}/10
                    </div>
                    <div className="text-gray-600">Score de rentabilité</div>
                  </div>
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
