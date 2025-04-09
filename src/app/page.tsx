import { FaChartLine, FaFilePdf, FaShare, FaStar } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                ImmoScanner AI
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Accueil
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Fonctionnalités
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
            <button className="md:hidden text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Analyse instantanée de vos annonces immobilières
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Collez une annonce et découvrez son potentiel locatif ou sa
                rentabilité en un clic, grâce à l&apos;IA.
              </p>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Analyser une annonce maintenant
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="aspect-video bg-white rounded-lg shadow-lg">
                {/* Placeholder pour le mockup */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Interface d&apos;analyse
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Analyse IA instantanée
              </h3>
              <p className="text-gray-600">
                L&apos;outil lit l&apos;annonce et vous donne un résumé clair.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFilePdf className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Rentabilité estimée
              </h3>
              <p className="text-gray-600">
                Calculez le rendement locatif en 1 clic.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">PDF & Partage</h3>
              <p className="text-gray-600">
                Exportez vos analyses ou partagez-les facilement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;En tant qu&apos;investisseur, je gagne un temps fou avec
                ImmoScanner AI. L&apos;analyse est rapide et précise.&quot;
              </p>
              <p className="font-semibold text-gray-900">Julie M.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;L&apos;outil m&apos;a permis d&apos;identifier plusieurs
                opportunités que j&apos;aurais manquées autrement.&quot;
              </p>
              <p className="font-semibold text-gray-900">Thomas L.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;La fonction d&apos;export PDF est géniale pour partager
                mes analyses avec mes associés.&quot;
              </p>
              <p className="font-semibold text-gray-900">Sophie D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à scanner votre première annonce ?
          </h2>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Essayer gratuitement sans inscription
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ImmoScanner AI</h3>
              <p className="text-gray-400">
                L&apos;outil intelligent pour analyser vos annonces
                immobilières.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Conditions d&apos;utilisation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Restez informé des dernières fonctionnalités.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 rounded-l-lg w-full"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 ImmoScanner AI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
