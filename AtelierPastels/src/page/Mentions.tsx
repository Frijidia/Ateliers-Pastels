import React from 'react';

function Mentions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-50">
      <header className="py-20 text-center bg-blue-400">
        <h1 className="text-4xl font-bold text-white">Mentions Légales</h1>
      </header>

      <main className="container mx-auto px-6 max-w-4xl py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Mentions Légales</h2>
          <div className="space-y-2 text-gray-700">
            <p>Les Ateliers Pastels</p>
            <p>123 Rue de la Création</p>
            <p>75001 Paris France</p>
            <p>SIRET: 123 456 789 00010</p>
            <p>Numéro TVA: FR123456789010</p>
            <p>Directrice de Publication: Sophie Martin</p>
            <p>Email: contact@atelierspastels.com</p>
            <p>Téléphone: +33 1 23 45 67 89</p>
            <p>Site web hébergé par: Nom de la société d'hébergement</p>
            <p>Adresse: Adresse de la société d'hébergement</p>
            <p>Téléphone: Téléphone de la société d'hébergement</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Conditions d'Utilisation</h2>
          
          <h3 className="font-semibold mb-2">Acceptation des Conditions</h3>
          <p className="mb-4 text-gray-700">
            En accédant et en utilisant le site web des Ateliers Pastels, vous acceptez et consentez à être lié par les termes et dispositions de cet accord.
          </p>

          <h3 className="font-semibold mb-2">Propriété Intellectuelle</h3>
          <p className="mb-4 text-gray-700">
            Tout le contenu inclus sur ce site, comme le texte, les graphiques, les logos, les images, ainsi que leur compilation, et tout logiciel utilisé sur le site, est la propriété des Ateliers Pastels ou de ses fournisseurs et protégé par les lois françaises et internationales sur le droit d'auteur.
          </p>

          <h3 className="font-semibold mb-2">Limitation d'Utilisation</h3>
          <p className="mb-4 text-gray-700">
            L'autorisation est accordée de télécharger temporairement une copie des matériaux sur le site web des Ateliers Pastels pour un visionnage personnel et non-commercial uniquement. Il s'agit de l'octroi d'une licence, pas d'un transfert de titre.
          </p>

          <h3 className="font-semibold mb-2">Conduite de l'Utilisateur</h3>
          <p className="mb-4 text-gray-700">
            En utilisant ce site web, vous acceptez de ne pas:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Utiliser le site d'une manière qui pourrait causer des dommages au site ou altérer sa disponibilité</li>
            <li>Utiliser le site à des fins illégales ou en violation de toute loi locale, nationale ou internationale</li>
            <li>Copier ou adapter le code source du site web ou toute partie de celui-ci</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Politique de Confidentialité</h2>
          <p className="text-gray-700">
            Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles. Pour plus d'informations, veuillez consulter notre politique de confidentialité complète.
          </p>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-600">
        <p>© 2024 Les Ateliers Pastels. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Mentions;