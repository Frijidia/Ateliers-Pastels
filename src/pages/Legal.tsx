
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const Legal = () => {
  return (
    <Layout>
      <div className="py-28 bg-pastel-black">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center">Mentions Légales</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Legal Notice */}
            <div>
              <SectionTitle title="Mentions Légales" align="left" />
              <div className="prose max-w-none">
                <p>
                  Les Ateliers Pastels<br />
                  123 Rue de la Création<br />
                  75001 Paris, France<br />
                  SIRET: 123 456 789 00010<br />
                  Numéro TVA: FR12345678900
                </p>
                <p>
                  Directrice de Publication: Sophie Martin<br />
                  Email: contact@atelierspastels.com<br />
                  Téléphone: +33 1 23 45 67 89
                </p>
                <p>
                  Site web hébergé par: Nom de la société d'hébergement<br />
                  Adresse: Adresse de la société d'hébergement<br />
                  Téléphone: Téléphone de la société d'hébergement
                </p>
              </div>
            </div>

            {/* Terms of Use */}
            <div>
              <SectionTitle title="Conditions d'Utilisation" align="left" />
              <div className="prose max-w-none">
                <h3>Acceptation des Conditions</h3>
                <p>
                  En accédant et en utilisant le site web des Ateliers Pastels, vous acceptez et consentez à être lié par les termes et dispositions de cet accord.
                </p>

                <h3>Propriété Intellectuelle</h3>
                <p>
                  Tout le contenu inclus sur ce site, comme le texte, les graphiques, les logos, les images, ainsi que leur compilation, et tout logiciel utilisé sur le site, est la propriété des Ateliers Pastels ou de ses fournisseurs et protégé par les lois françaises et internationales sur le droit d'auteur.
                </p>

                <h3>Licence d'Utilisation</h3>
                <p>
                  L'autorisation est accordée de télécharger temporairement une copie des matériaux sur le site web des Ateliers Pastels pour un visionnage personnel, non commercial et transitoire uniquement. Il s'agit de l'octroi d'une licence, pas d'un transfert de titre.
                </p>

                <h3>Conduite de l'Utilisateur</h3>
                <p>
                  En utilisant ce site web, vous acceptez de ne pas:
                </p>
                <ul>
                  <li>Utiliser le site d'une manière qui pourrait causer des dommages au site ou altérer sa disponibilité</li>
                  <li>Utiliser le site à des fins illégales ou en violation de toute loi locale, nationale ou internationale</li>
                  <li>Copier ou adapter le code source du site web, y compris HTML, CSS, JavaScript ou autre code</li>
                </ul>
              </div>
            </div>

            {/* Privacy Policy */}
            <div>
              <SectionTitle title="Politique de Confidentialité" align="left" />
              <div className="prose max-w-none">
                <h3>Collecte d'Informations</h3>
                <p>
                  Nous collectons des informations personnelles que vous fournissez volontairement lorsque vous nous contactez via notre site web ou demandez un devis. Ces informations peuvent inclure votre nom, adresse email, numéro de téléphone, nom de l'entreprise et détails du projet.
                </p>

                <h3>Utilisation des Informations</h3>
                <p>
                  Nous utilisons les informations que nous collectons pour:
                </p>
                <ul>
                  <li>Répondre à vos demandes et fournir les services que vous demandez</li>
                  <li>Vous envoyer des communications promotionnelles, si vous avez accepté de les recevoir</li>
                  <li>Améliorer notre site web et nos services</li>
                </ul>

                <h3>Protection des Données</h3>
                <p>
                  Nous mettons en œuvre diverses mesures de sécurité pour maintenir la sécurité de vos informations personnelles. Les données personnelles sont stockées dans des bases de données sécurisées et ne sont accessibles que par le personnel autorisé.
                </p>

                <h3>Cookies</h3>
                <p>
                  Notre site web utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser tous ou certains cookies, ou pour vous alerter lorsque des cookies sont envoyés.
                </p>

                <h3>Vos Droits</h3>
                <p>
                  En vertu du Règlement Général sur la Protection des Données (RGPD), vous avez le droit d'accéder, de rectifier ou de demander la suppression de vos données personnelles. Pour exercer ces droits, veuillez nous contacter à contact@atelierspastels.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
