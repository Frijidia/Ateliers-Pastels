import { useEffect, useState, ReactNode } from "react";
import firstvecteur from "../assets/fond-flottant-formes-3d-realistes.png";
import secondvecteur from "../assets/assortiment-vases-modernes.png";
import thirdvecteur from "../assets/celebration-du-carnaval-art-numerique.png";
import fourthvecteur from "../assets/personnage-affaires-dessin-anime-3d_1048-16633.png";
import fifthvecteur from "../assets/art.png";
import { Palette, Printer, Gift, Megaphone, Monitor, Briefcase } from "lucide-react";


const Services = () => {
  interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }

  const AnimatedSection = ({ children, delay = 0, className = "" }: AnimatedSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        },
        { threshold: 0.1 }
      );

      const currentElement = document.getElementById(`section-${delay}`);
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [delay, hasAnimated]);

    return (
      <div
        id={`section-${delay}`}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        } ${className}`}
      >
        {children}
      </div>
    );
  };
  
interface AnimatedListItemProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedListItem = ({ children, delay = 0 }: AnimatedListItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`list-item-${delay}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, hasAnimated]);

  return (
    <div
      id={`list-item-${delay}`}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      {children}
    </div>
  );
};


  return (
    <div className="font-sans text-gray-800 bg-gradient-services min-h-screen">
      <section className="py-10 from-orange-100 to-yellow-200 text-center">
        <AnimatedSection delay={0}>
          <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-gray-700 mb-20">Des solutions complètes pour tous vos besoins en communication visuelle</p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
          <div className="space-y-6 text-left">
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-bold flex items-center">
                <Palette className="mr-2" size={24} />
                Identité visuelle & création graphique
              </h3>
            </AnimatedSection>
            <ul className="space-y-4">
              <AnimatedListItem delay={300}>
                <li className="flex">
                  <div className="bg-purple-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Palette size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Conception de logos</strong>
                    <p className="text-sm text-gray-600">Créations originales adaptées à votre image</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={400}>
                <li className="flex">
                  <div className="bg-purple-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Palette size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Création de chartes graphiques complètes</strong>
                    <p className="text-sm text-gray-600">Couleurs, typographies et éléments visuels cohérents</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={500}>
                <li className="flex">
                  <div className="bg-purple-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Palette size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Design de papeterie</strong>
                    <p className="text-sm text-gray-600">Cartes de visite, papier à en-tête, enveloppes</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={600}>
                <li className="flex">
                  <div className="bg-purple-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Monitor size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Création de visuels pour les réseaux sociaux et le web</strong>
                    <p className="text-sm text-gray-600">Bannières, posts et images adaptées</p>
                  </div>
                </li>
              </AnimatedListItem>
            </ul>
          </div>
          <AnimatedSection delay={300} className="overflow-hidden">
            <img src={firstvecteur} alt="Identité visuelle & création graphique" className="rounded-xl transform transition-transform hover:scale-105 duration-500" />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 from-yellow-100 to-gray-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
          <AnimatedSection delay={100} className="overflow-hidden">
            <img src={secondvecteur} alt="Impression & production de supports" className="rounded-xl transform transition-transform hover:scale-105 duration-500" />
          </AnimatedSection>
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-bold flex items-center">
                <Printer className="mr-2" size={24} />
                Impression & production de supports
              </h3>
            </AnimatedSection>
            <ul className="space-y-4">
              <AnimatedListItem delay={300}>
                <li className="flex">
                  <div className="bg-blue-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Printer size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Impression numérique et offset</strong>
                    <p className="text-sm text-gray-600">Pour petits et grands tirages</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={400}>
                <li className="flex">
                  <div className="bg-blue-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Printer size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Sérigraphie sur textiles ou objets</strong>
                    <p className="text-sm text-gray-600">Personnalisation durable et de qualité</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={500}>
                <li className="flex">
                  <div className="bg-blue-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Printer size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Impression de supports variés</strong>
                    <p className="text-sm text-gray-600">Flyers, brochures, catalogues, affiches</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={600}>
                <li className="flex">
                  <div className="bg-blue-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Printer size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Packaging personnalisé</strong>
                    <p className="text-sm text-gray-600">Boîtes, étiquettes, sacs, etc.</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={700}>
                <li className="flex">
                  <div className="bg-blue-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Printer size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Impression grand format</strong>
                    <p className="text-sm text-gray-600">Kakemonos, bâches, panneaux</p>
                  </div>
                </li>
              </AnimatedListItem>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4 mt-16 items-center">
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-bold flex items-center">
                <Gift className="mr-2" size={24} />
                Goodies & objets publicitaires
              </h3>
            </AnimatedSection>
            <ul className="space-y-4">
              <AnimatedListItem delay={300}>
                <li className="flex">
                  <div className="bg-green-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Gift size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Articles promotionnels personnalisés</strong>
                    <p className="text-sm text-gray-600">Stylos, t-shirts, tote bags, clés USB, mugs, etc.</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={400}>
                <li className="flex">
                  <div className="bg-green-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Gift size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Objets pour événements</strong>
                    <p className="text-sm text-gray-600">Personnalisation d'objets promotionnels pour vos événements</p>
                  </div>
                </li>
              </AnimatedListItem>
            </ul>
          </div>
          <AnimatedSection delay={300} className="overflow-hidden">
            <img src={thirdvecteur} alt="Goodies & objets publicitaires" className="rounded-xl transform transition-transform hover:scale-105 duration-500" />
          </AnimatedSection>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4 mt-16 items-center">
          <AnimatedSection delay={100} className="overflow-hidden">
            <img src={fourthvecteur} alt="Signalétique & PLV" className="rounded-xl transform transition-transform hover:scale-105 duration-500" />
          </AnimatedSection>
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-bold flex items-center">
                <Megaphone className="mr-2" size={24} />
                Signalétique & PLV
              </h3>
            </AnimatedSection>
            <ul className="space-y-4">
              <AnimatedListItem delay={300}>
                <li className="flex">
                  <div className="bg-red-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Megaphone size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Panneaux d'affichage, enseignes</strong>
                    <p className="text-sm text-gray-600">Visibilité optimale pour votre entreprise</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={400}>
                <li className="flex">
                  <div className="bg-red-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Megaphone size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Roll-ups, oriflammes, totems</strong>
                    <p className="text-sm text-gray-600">Solutions mobiles pour vos événements</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={500}>
                <li className="flex">
                  <div className="bg-red-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Megaphone size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Stickers et autocollants</strong>
                    <p className="text-sm text-gray-600">Pour muraux, vitrines, véhicules</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={600}>
                <li className="flex">
                  <div className="bg-red-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Megaphone size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <strong>Décoration de stands & d'espaces commerciaux</strong>
                    <p className="text-sm text-gray-600">Aménagement visuel complet pour vos espaces</p>
                  </div>
                </li>
              </AnimatedListItem>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4 mt-16 items-center">
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-bold flex items-center">
                <Briefcase className="mr-2" size={24} />
                Conseil & accompagnement
              </h3>
            </AnimatedSection>
            <ul className="space-y-4">
              <AnimatedListItem delay={300}>
                <li className="flex">
                  <div className="bg-amber-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Briefcase size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <strong>Stratégie de communication visuelle</strong>
                    <p className="text-sm text-gray-600">Accompagnement personnalisé pour votre image</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={400}>
                <li className="flex">
                  <div className="bg-amber-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Briefcase size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <strong>Conseil en choix de formats et matériaux</strong>
                    <p className="text-sm text-gray-600">Expertise en papiers et techniques d'impression</p>
                  </div>
                </li>
              </AnimatedListItem>
              <AnimatedListItem delay={500}>
                <li className="flex">
                  <div className="bg-amber-200 p-2 rounded-lg mr-3 flex items-center justify-center">
                    <Briefcase size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <strong>Suivi de production</strong>
                    <p className="text-sm text-gray-600">Gestion de projets créatifs de A à Z</p>
                  </div>
                </li>
              </AnimatedListItem>
            </ul>
          </div>
          <AnimatedSection delay={300} className="overflow-hidden">
            <img src={fifthvecteur} alt="Conseil & accompagnement" className="rounded-xl transform transition-transform hover:scale-105 duration-500" />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 from-blue-100 to-indigo-100">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection delay={100}>
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <Monitor className="mr-2" size={24} />
              Services digitaux
            </h3>
            <p className="text-gray-600 mb-6 text-center italic">(Facultatif, selon les ambitions futures ou collaborations)</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md flex hover:shadow-lg transition-shadow duration-300">
                <div className="bg-indigo-200 p-2 rounded-lg mr-3 h-min flex items-center justify-center">
                  <Monitor size={18} className="text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Création de visuels pour réseaux sociaux</h4>
                  <p className="text-gray-600">Visuels adaptés pour vos campagnes web et présence en ligne</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md flex hover:shadow-lg transition-shadow duration-300">
                <div className="bg-indigo-200 p-2 rounded-lg mr-3 h-min flex items-center justify-center">
                  <Monitor size={18} className="text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Mise en page numérique</h4>
                  <p className="text-gray-600">Newsletters, présentations et documents interactifs</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="text-center py-16 from-sky-100 to-pink-100">
        <AnimatedSection delay={100}>
          <h1 className="text-3xl font-bold mb-2">Démarrez votre projet dès aujourd'hui</h1>
          <p className="text-gray-600 mb-6">Nous sommes là pour donner vie à votre vision créative</p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transform transition hover:scale-105 duration-300">Contactez-nous</button>
            <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transform transition hover:scale-105 duration-300">Demandez un devis</button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Services;