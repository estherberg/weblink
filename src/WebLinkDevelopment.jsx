import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Code, Rocket, Shield, Star, Check, Menu, X, Globe, Sparkles, ArrowRight, MousePointer, Languages, MessageCircle } from 'lucide-react';
import logoImage from './assets/logo.png';

export default function WebLinkDevelopment() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [language, setLanguage] = useState('fr');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const content = {
        fr: {
            nav: {
                services: "Services",
                pricing: "Tarifs",
                contact: "Contact",
                cta: "Démarrer"
            },
            hero: {
                badge: "Création de sites web nouvelle génération",
                title1: "Transformez votre vision en",
                title2: "réalité digitale",
                subtitle: "Des sites web ultra-performants, au design futuriste, déployés en un éclair. Propulsez votre business vers le futur.",
                cta1: "Voir les offres",
                cta2: "Portfolio"
            },
            stats: [
                { value: "50+", label: "Projets Livrés" },
                { value: "98%", label: "Clients Satisfaits" },
                { value: "24h", label: "Temps de Réponse" },
                { value: "100%", label: "Code Quality" }
            ],
            services: {
                title1: "Une expertise",
                title2: "complète",
                subtitle: "Technologies modernes, résultats exceptionnels",
                items: [
                    {
                        title: "UI/UX Design",
                        description: "Interfaces modernes et intuitives pour une expérience utilisateur optimale"
                    },
                    {
                        title: "Développement Full-Stack",
                        description: "Code propre, moderne et optimisé pour la performance maximale"
                    },
                    {
                        title: "Google SEO",
                        description: "Optimisation avancée pour dominer les résultats de recherche"
                    },
                    {
                        title: "Applications Web",
                        description: "Solutions web sur-mesure, évolutives et sécurisées"
                    }
                ]
            },
            pricing: {
                title1: "Des tarifs",
                title2: "transparents",
                subtitle: "Choisissez la formule adaptée à vos besoins",
                plans: [
                    {
                        name: "Basique",
                        price: "499€",
                        description: "Parfait pour démarrer votre présence en ligne",
                        features: [
                            "Site vitrine 3-5 pages",
                            "Design moderne et responsive",
                            "Optimisation SEO basique",
                            "Formulaire de contact",
                            "Hébergement 1 an inclus",
                            "Support 30 jours"
                        ],
                        cta: "Commencer"
                    },
                    {
                        name: "Standard",
                        price: "799€",
                        description: "Pour les projets professionnels ambitieux",
                        features: [
                            "Site jusqu'à 10 pages",
                            "Design premium personnalisé",
                            "Optimisation SEO avancée",
                            "Intégration CMS",
                            "Analytics & statistiques",
                            "Blog intégré",
                            "Animations avancées",
                            "Support 90 jours"
                        ],
                        cta: "Commencer"
                    },
                    {
                        name: "Personnalisé",
                        price: "Sur devis",
                        description: "Solution unique adaptée à vos besoins",
                        features: [
                            "Pages illimitées",
                            "Fonctionnalités sur-mesure",
                            "E-commerce / Dashboard",
                            "Intégrations API",
                            "Design system complet",
                            "Formation équipe",
                            "Support prioritaire illimité",
                            "Maintenance incluse"
                        ],
                        cta: "Nous contacter"
                    }
                ],
                popular: "Plus Populaire",
                payment: "Paiement unique"
            },
            cta: {
                title1: "Prêt à",
                title2: "décoller",
                subtitle: "Discutons de votre projet et créons ensemble le site web de vos rêves",
                email: "Votre email",
                button: "Démarrer maintenant"
            },
            footer: {
                copyright: "© 2026 WebLink Development. Créé avec ❤️ et beaucoup de caféine.",
                legal: "Mentions légales",
                terms: "CGV"
            }
        },
        en: {
            nav: {
                services: "Services",
                pricing: "Pricing",
                contact: "Contact",
                cta: "Get Started"
            },
            hero: {
                badge: "Next-generation web development",
                title1: "Transform your vision into",
                title2: "digital reality",
                subtitle: "Ultra-performing websites with futuristic design, deployed in a flash. Propel your business into the future.",
                cta1: "View Offers",
                cta2: "Portfolio"
            },
            stats: [
                { value: "50+", label: "Projects Delivered" },
                { value: "98%", label: "Satisfied Clients" },
                { value: "24h", label: "Response Time" },
                { value: "100%", label: "Code Quality" }
            ],
            services: {
                title1: "Complete",
                title2: "expertise",
                subtitle: "Modern technologies, exceptional results",
                items: [
                    {
                        title: "UI/UX Design",
                        description: "Modern and intuitive interfaces for optimal user experience"
                    },
                    {
                        title: "Full-Stack Development",
                        description: "Clean, modern code optimized for maximum performance"
                    },
                    {
                        title: "Google SEO",
                        description: "Advanced optimization to dominate search results"
                    },
                    {
                        title: "Web Applications",
                        description: "Custom, scalable and secure web solutions"
                    }
                ]
            },
            pricing: {
                title1: "Transparent",
                title2: "pricing",
                subtitle: "Choose the plan that fits your needs",
                plans: [
                    {
                        name: "Basic",
                        price: "$599",
                        description: "Perfect to start your online presence",
                        features: [
                            "3-5 pages showcase website",
                            "Modern responsive design",
                            "Basic SEO optimization",
                            "Contact form",
                            "1 year hosting included",
                            "30 days support"
                        ],
                        cta: "Get Started"
                    },
                    {
                        name: "Standard",
                        price: "$999",
                        description: "For ambitious professional projects",
                        features: [
                            "Website up to 10 pages",
                            "Custom premium design",
                            "Advanced SEO optimization",
                            "CMS integration",
                            "Analytics & statistics",
                            "Integrated blog",
                            "Advanced animations",
                            "90 days support"
                        ],
                        cta: "Get Started"
                    },
                    {
                        name: "Custom",
                        price: "Custom quote",
                        description: "Unique solution tailored to your needs",
                        features: [
                            "Unlimited pages",
                            "Custom features",
                            "E-commerce / Dashboard",
                            "API integrations",
                            "Complete design system",
                            "Team training",
                            "Unlimited priority support",
                            "Maintenance included"
                        ],
                        cta: "Contact Us"
                    }
                ],
                popular: "Most Popular",
                payment: "One-time payment"
            },
            cta: {
                title1: "Ready to",
                title2: "take off",
                subtitle: "Let's discuss your project and create your dream website together",
                email: "Your email",
                button: "Start now"
            },
            footer: {
                copyright: "© 2024 WebLink Development. Made with ❤️ and lots of caffeine.",
                legal: "Legal Notice",
                terms: "Terms"
            }
        }
    };

    const t = content[language];

    const services = [
        {
            icon: <Code className="w-6 h-6" />,
            title: t.services.items[1].title,
            description: t.services.items[1].description
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "UI/UX Design",
            description: t.services.items[0].description
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: t.services.items[2].title,
            description: t.services.items[2].description
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: t.services.items[3].title,
            description: t.services.items[3].description
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 text-slate-900 overflow-x-hidden">
            {/* WhatsApp Floating Button */}
            <a
                href={language === 'fr' ? 'https://wa.me/33695443075' : 'https://wa.me/972539309450'}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
                aria-label="WhatsApp"
            >
                <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
            {/* Animated Background */}
            <div className="fixed inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-blue-100/50' : ''}`}>
                <div className="w-full mx-auto px-4 md:px-8 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/30">
                                <img
                                    src={logoImage}
                                    alt="Logo WebLink"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">WebLink</span>
                                <div className="text-xs text-slate-600">Development</div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg">{t.nav.services}</a>
                            <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg">{t.nav.pricing}</a>
                            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg">{t.nav.contact}</a>
                            <button
                                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                                className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-300 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all"
                            >
                                <Languages className="w-4 h-4" />
                                <span className="font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
                            </button>
                            <button className="px-7 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 font-medium">
                                {t.nav.cta} <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-20">
                    <div className="flex flex-col items-center justify-center gap-8 p-6 text-center">
                        <a href="#services" className="text-2xl text-slate-700 hover:text-blue-600 font-medium text-center" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
                        <a href="#pricing" className="text-2xl text-slate-700 hover:text-blue-600 font-medium text-center" onClick={() => setMobileMenuOpen(false)}>{t.nav.pricing}</a>
                        <a href="#contact" className="text-2xl text-slate-700 hover:text-blue-600 font-medium text-center" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
                        <button
                            onClick={() => {
                                setLanguage(language === 'fr' ? 'en' : 'fr');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 rounded-full text-xl hover:border-blue-500 hover:bg-blue-50"
                        >
                            <Languages className="w-5 h-5" />
                            <span className="font-medium">{language === 'fr' ? 'English' : 'Français'}</span>
                        </button>
                        <a
                            href={`https://wa.me/${language === 'fr' ? '33695443075' : '972539309450'}`}
                            className="text-2xl font-semibold text-black hover:text-gray-600 transition-colors px-8 py-3 rounded-full shadow-lg shadow-blue-200/30 text-center"
                        >
                            {t.nav.cta}
                        </a>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 px-4 md:px-8 min-h-screen flex items-center justify-center">
                <div className="w-full mx-auto">
                    <div className="text-center w-full mx-auto">
                        <div className="flex justify-center mb-10">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 border border-blue-300 rounded-full backdrop-blur-sm">
                                <Zap className="w-5 h-5 text-blue-600" />
                                <span className="text-base text-blue-700 font-medium">{t.hero.badge}</span>
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-slate-900 text-center">
                            {t.hero.title1}
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent"> {t.hero.title2}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed mx-auto text-center px-2">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                            <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                                {t.hero.cta1}
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-5 border-2 border-slate-300 rounded-full text-lg font-semibold hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 text-slate-700 w-full sm:w-auto text-center">
                                {t.hero.cta2}
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-auto">
                            {t.stats.map((stat, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="relative bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/50 transition-all">
                                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-base text-slate-600 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="relative py-24 px-4 md:px-8">
                <div className="w-full mx-auto">
                    <div className="text-center mb-20 mx-auto">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 text-center">
                            {t.services.title1} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t.services.title2}</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 text-center">{t.services.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 mx-auto">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className={`relative group cursor-pointer transition-all duration-500 ${activeService === idx ? 'scale-105' : ''}`}
                                onMouseEnter={() => setActiveService(idx)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-6 md:p-10 h-full hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 text-center">
                                    <div className="flex justify-center mb-6">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform duration-300 ${activeService === idx ? 'scale-110 rotate-12' : ''}`}>
                                            <div className="text-white">{service.icon}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">{service.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed text-center">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative py-24 px-4 md:px-8">
                <div className="w-full mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 text-center">
                            {t.pricing.title1} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t.pricing.title2}</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 text-center">{t.pricing.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-8 mx-auto max-w-7xl pt-8">
                        {t.pricing.plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative group ${idx === 1 ? 'md:-mt-6 md:mb-6' : ''}`}
                            >
                                {idx === 1 && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg z-10">
                                        ⭐ {t.pricing.popular}
                                    </div>
                                )}

                                <div className={`absolute inset-0 bg-gradient-to-br ${idx === 0 ? 'from-blue-400 to-cyan-400' : idx === 1 ? 'from-indigo-500 to-blue-500' : 'from-orange-400 to-red-400'} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>

                                <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${idx === 1 ? 'border-blue-400 shadow-xl shadow-blue-200/50' : 'border-slate-200'} rounded-3xl p-6 md:p-10 h-full hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 text-center`}>
                                    <h3 className="text-3xl font-bold mb-3 text-slate-900 text-center">{plan.name}</h3>
                                    <p className="text-slate-600 mb-8 h-12 text-base text-center">{plan.description}</p>

                                    <div className="mb-10 text-center">
                                        <div className={`text-6xl font-bold bg-gradient-to-r ${idx === 0 ? 'from-blue-600 to-cyan-600' : idx === 1 ? 'from-indigo-600 to-blue-600' : 'from-orange-600 to-red-600'} bg-clip-text text-transparent`}>
                                            {plan.price}
                                        </div>
                                        {!plan.price.includes('devis') && !plan.price.includes('quote') && <div className="text-slate-500 mt-2 text-center">{t.pricing.payment}</div>}
                                    </div>

                                    <ul className="space-y-4 mb-10 text-left">
                                        {plan.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 text-left">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-300 ${idx === 1
                                        ? `bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-xl hover:shadow-blue-500/50`
                                        : 'border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:bg-blue-50'
                                        }`}>
                                        {plan.cta}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="relative py-24 px-4 md:px-8">
                <div className="w-full max-w-5xl mx-auto text-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-8 md:p-16 shadow-xl text-center">
                            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 text-center">
                                {t.cta.title1} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t.cta.title2}</span> ?
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-600 mb-10 mx-auto text-center">
                                {t.cta.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
                                <input
                                    type="email"
                                    placeholder={t.cta.email}
                                    className="px-8 py-5 text-lg bg-white border-2 border-slate-300 rounded-full focus:outline-none focus:border-blue-500 text-slate-900 transition-colors w-full sm:w-auto text-center"
                                />
                                <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                                    {t.cta.button}
                                    <Rocket className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-center">
                                {/* Logo WhatsApp */}
                                <svg
                                    className="w-9 h-9 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>

                                {/* Numéro cliquable */}
                                <a
                                    href={`https://wa.me/${language === 'fr' ? '33695443075' : '972539309450'}`}
                                    className="text-2xl font-semibold text-black hover:text-black-400 transition-colors text-center"
                                >
                                    {language === 'fr' ? '+33 6 95 44 30 75' : '+972 53 930 9450'}
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-slate-200 bg-white/50 backdrop-blur-sm py-16 px-4 md:px-8">
                <div className="w-full mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/30">
                                <img
                                    src={logoImage}
                                    alt="Logo WebLink"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <span className="text-2xl font-bold text-slate-900">WebLink</span>
                                <div className="text-sm text-slate-600">Development</div>
                            </div>
                        </div>

                        <div className="text-slate-600 text-center">
                            {t.footer.copyright}
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
                            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-lg">{t.footer.legal}</a>
                            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-lg">{t.footer.terms}</a>
                            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-lg">{t.nav.contact}</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}