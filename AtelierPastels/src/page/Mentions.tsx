import React from 'react';

function Mentions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-50">
      <header className="py-20 text-center bg-blue-400">
        <h1 className="text-4xl font-bold text-white">Mentions Légales & Politique de Confidentialité</h1>
      </header>
      
      <main className="container mx-auto px-6 max-w-4xl py-12">
        {/* Section Mentions Légales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Mentions Légales</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Raison sociale :</strong> LES ATELIERS PASTELS</p>
            <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
            <p><strong>Année de création :</strong> 2022</p>
            <p><strong>Pays d'enregistrement :</strong> Bénin</p>
            <p><strong>Numéro RCCM :</strong> -</p>
            <p><strong>Adresse du siège social :</strong></p>
            <p>Ilot 2111, Parcelle A, Maison JEAN PAUL BOSSOU,</p>
            <p>Quartier Ménontin, Cotonou, Bénin</p>
            <p><strong>Représentant légal :</strong></p>
            <p>Fifame Bernice Pamela BOSSOU - Co-Gérante</p>
            <p><strong>Téléphone :</strong> +229 01 95 52 36 54</p>
            <p><strong>Email :</strong> lesatelierspastels1@gmail.com</p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hébergement du site</h2>
          <div className="space-y-2 text-gray-700">
            <p>o2switch</p>
            <p>Siret : 510 909 807 00032</p>
            <p>RCS Clermont Ferrand</p>
            <p>SAS au capital de 100 000€</p>
            <p><strong>Opérateur Télécom déclaré ARCEP</strong></p>
            <p>09/2989 - AS50474</p>
            <p>Marque déposée INPI : 09 3 645 279</p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Responsabilité éditoriale</h2>
          <p className="text-gray-700">BRAVE EMG</p>
        </section>
        
        {/* Section Politique de Confidentialité */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Politique de Confidentialité</h2>
          <p className="text-gray-700 mb-4"><strong>Dernière mise à jour : 23 avril 2025</strong></p>
          
          <h3 className="text-xl font-semibold mb-3">1. Présentation</h3>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">
              La présente politique de confidentialité a pour but de vous informer de
              la manière dont <strong>LES ATELIERS PASTELS</strong>, entreprise individuelle
              immatriculée sous le numéro - COTONOU et dont le siège social est situé
              à Ilot: 2111, Quartier: Ménontin, Parcelle: A, Maison: JEAN PAUL BOSSOU
              collecte, utilise, protège et partage vos données personnelles.
            </p>
            <p>
              LES ATELIERS PASTELS s'engage à respecter la vie privée de ses
              utilisateurs, clients, partenaires et visiteurs, et à garantir la
              confidentialité des informations personnelles conformément aux lois et
              règlements applicables en matière de protection des données.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">2. Données collectées</h3>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">Nous pouvons être amenés à collecter les catégories de données suivantes :</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Données d'identification</strong> : nom, prénom, adresse, email, numéro de téléphone, etc.</li>
              <li><strong>Données professionnelles</strong> : poste, entreprise, secteur d'activité, etc.</li>
              <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, durée de la session, etc.</li>
              <li><strong>Données techniques</strong> (si utilisation d'applications/plateformes) : identifiants de connexion, logs, cookies, etc.</li>
            </ul>
            <p>Les données sont collectées notamment via :</p>
            <ul className="list-disc pl-6">
              <li>Formulaires de contact ou d'inscription</li>
              <li>Services proposés sur notre site ou nos plateformes</li>
              <li>Correspondance avec nos équipes (email, téléphone, réseaux sociaux)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">3. Finalités du traitement</h3>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">Les données personnelles collectées par LES ATELIERS PASTELS peuvent être utilisées pour les finalités suivantes :</p>
            <ul className="list-disc pl-6">
              <li>Fourniture de services et de prestations</li>
              <li>Réponse aux demandes d'informations ou de devis</li>
              <li>Gestion de la relation client et du support technique</li>
              <li>Amélioration de nos services et contenus</li>
              <li>Envoi d'informations commerciales ou promotionnelles (si consentement)</li>
              <li>Conformité avec nos obligations légales et réglementaires</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">4. Base légale du traitement</h3>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">Les traitements de données réalisés par LES ATELIERS PASTELS reposent sur :</p>
            <ul className="list-disc pl-6">
              <li>Le <strong>consentement</strong> préalable de la personne concernée</li>
              <li>L'<strong>exécution d'un contrat</strong> ou de mesures précontractuelles</li>
              <li>Le <strong>respect d'obligations légales</strong> ou réglementaires</li>
              <li>L'<strong>intérêt légitime</strong> de LES ATELIERS PASTELS à assurer son activité, sa sécurité, ou à développer ses services</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">5. Durée de conservation</h3>
          <div className="mb-6 text-gray-700">
            <p>Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et selon les durées légales applicables. À l'issue de ces durées, elles sont supprimées ou anonymisées.</p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">6. Destinataires des données</h3>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">Les données personnelles collectées sont exclusivement destinées aux services internes de LES ATELIERS PASTELS. Elles peuvent être partagées, si nécessaire, avec :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Des prestataires ou sous-traitants agissant pour le compte de LES ATELIERS PASTELS</li>
              <li>Des autorités administratives ou judiciaires, en cas d'obligation légale</li>
            </ul>
            <p>LES ATELIERS PASTELS ne vend ni ne loue vos données personnelles à des tiers.</p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">7. Sécurité des données</h3>
          <div className="mb-6 text-gray-700">
            <p>LES ATELIERS PASTELS met en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité, la confidentialité, l'intégrité et la disponibilité des données personnelles.</p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">8. Vos droits</h3>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">Conformément aux réglementations en vigueur, vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
              <li>Droit à la portabilité</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>Pour exercer ces droits, vous pouvez adresser votre demande à :</p>
            <p>📧 <strong>pamela@lesatelierspastels.com</strong></p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">9. Cookies</h3>
          <div className="mb-6 text-gray-700">
            <p>Le site de LES ATELIERS PASTELS peut utiliser des cookies pour améliorer l'expérience utilisateur. Un bandeau d'information permet d'obtenir votre consentement lors de votre première visite.</p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">10. Modifications de la politique</h3>
          <div className="mb-6 text-gray-700">
            <p>LES ATELIERS PASTELS se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification importante sera notifiée sur notre site ou par tout autre moyen approprié.</p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">11. Contact</h3>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">Pour toute question relative à cette politique ou à vos données personnelles :</p>
            <p>📬 <strong>pamela@lesatelierspastels.com</strong></p>
            <p>📍 <strong>Ilot: 2111, Quartier: Ménontin, Parcelle: A, Maison: JEAN PAUL BOSSOU. Cotonou, Bénin.</strong></p>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-gray-600">
        <p>© 2025 Les Ateliers Pastels. Tous droits réservés.</p>
        <p>Dernière mise à jour : 23 avril 2025</p>
      </footer>
    </div>
  );
}

export default Mentions;