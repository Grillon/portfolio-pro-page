(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const d="v0.12.3",c="Thierry Vogel – Études de cas infrastructure",p="Architecte Système orienté infrastructure, fiabilité et automatisation chez Orange (2009–2023), aujourd’hui indépendant.",b=`De 2011 à 2015, j’ai occupé un rôle transverse d’automatisation et de fiabilisation chez Orange, en tant qu’ingénieur systèmes spécialisé HPUX et RHEL. Je m’appuyais sur BladeLogic pour créer des workflows agnostiques, robustes et maintenables.

J’ai contribué à la communauté ComDev, en structurant des outils d’exploitation inter-équipes avec des scripts composites (NSH, KSH, Perl) produisant des rapports HTML/CSV utilisables par des non-spécialistes.

À partir de 2015, j’ai consolidé mon expertise DevOps avec la mise en place de pipelines CI/CD (Git, Jenkins, GitLab CI, Ansible) et le déploiement d’applications sur Cloud Foundry.

Depuis 2023, j’explore les usages concrets du Web3 et de l’IA, à travers des projets open source comme WallEx et EasyLandingWeb.

En tant qu’Architecte Système, je conçois des solutions robustes pour le cloud, l’IA, l’infrastructure et les workflows critiques, avec une capacité à comprendre les architectures logicielles et matérielles.

Ce document commence par la présentation de trois cas concrets (2011–2015) où mes scripts BladeLogic ont transformé des processus critiques, prouvant leur efficacité par leur simplicité et leur fiabilité.`,m=[{titre:"Augmentation de volumétrie (~2011–2014)",resume:"Script BladeLogic pour HPUX/Linux, initialement jugé “inutile”. Clé pour migrer 15 000 serveurs via un workflow agnostic avec rapports HTML/CSV. Impact : 80 % de réduction du temps, 95 % des tickets éliminés."},{titre:"Pré-check avant reboot (~2011–2014)",resume:"Audit automatisé via BladeLogic, 2x/jour sur 15 000+ serveurs Unix/Linux. Workflow agnostic avec rapports HTML/CSV. Devenu obligatoire après un incident évitable. Impact : 90 % de réduction des incidents."},{titre:"Ouverture de flux réseau – Vérification automatique (~2013–2015)",resume:"Scripts composites BladeLogic pour tester les flux réseau via un workflow agnostic avec rapports HTML/CSV. Impact : 90 % des allers-retours supprimés, 3 à 5 jours gagnés par flux."},{titre:"Refonte CI/CD sur TCF (2015–2016)",resume:"Refonte complète de la chaîne CI/CD pour une API stratégique : Git, Maven, Jenkins, Ansible. Première mise en œuvre complète de mes compétences DevOps."},{titre:"Pipelines CI/CD sur KDO & Orange Reprise – Phase 1 (2016–2019)",resume:"Déploiement et maintien de pipelines différenciés entre environnements. Référence DevOps lors des audits internes."},{titre:"Déploiement initial Cloud Foundry – Orange Connect (2019–2023)",resume:"Déploiement complet sur Cloud Foundry avec services managés. Coordination multi-équipes agile@Scale et mise en place de CI/CD."},{titre:"Migration cloud vers Cloud Foundry - KDO & Orange Reprise – Phase 2 (2021–2023)",resume:"Migration Cloud Applicatif et CI/CD de git/jenkins/ansible sur VMs vers GitLab CI sur Cloud Foundry. Approche industrialisée et durable."},{titre:"Exploration entrepreneuriale Web3 / IA (2023–2025)",resume:"Exploration Web3, IA, cloud décentralisé via hackathons/Start-UpThon. Repositionnement Architecte Système, ouvert aux technos actuelles."}],v=[{titre:"Augmentation de volumétrie (2011–2014)",contexte:"J’ai créé un script pour augmenter rapidement la volumétrie disque sur des serveurs HPUX et RHEL, dans un contexte où les processus manuels étaient lents et sujets à erreurs.",declencheur:"Une demande pour 50 serveurs a révélé un projet de migration massive de 15 000 machines multi-OS (HPUX, RHEL, AIX, Solaris, SunOS).",probleme:"Les augmentations manuelles prenaient 10 minutes par serveur, rendant la migration à grande échelle ingérable sans automatisation.",objectif:"Automatiser l’augmentation de volumétrie pour réduire le temps, éliminer les erreurs et permettre une exécution transverse sur des OS hétérogènes.",action:["Généralisation du script pour supporter HPUX, RHEL, AIX, Solaris, SunOS via BladeLogic.","Ajout de détection automatique de l’OS et de la version.","Adaptation aux erreurs spécifiques avec logging structuré (HTML/CSV).","Collaboration avec les admins AIX/Solaris pour valider la compatibilité."],deploiement:["Intégration dans un workflow BladeLogic agnostic : détection des tickets, exécution planifiée, rapports HTML/CSV, clôture automatique.","Lancement massif sans distinction de projet, compatible avec les machines non concernées (ex. Windows).","Supervision simplifiée : le chef de projet non-tech gérait sans intervention technique."],impacts:["Migration réalisée en 3 mois au lieu de 12 mois estimés.","Réduction de 80 % du temps de traitement et élimination de 95 % des tickets manuels.","Zéro incident sur 15 000 serveurs.","Outil adopté comme standard pour d’autres projets."],remarque:"Un besoin personnel a donné naissance à une solution transverse, intégrée via BladeLogic, prouvant la valeur d’une automatisation robuste."},{titre:"Pré-check avant reboot (2011–2014)",contexte:"Les redémarrages de serveurs critiques pour la maintenance (MCO) chez Orange manquaient de vérifications standardisées, augmentant le risque d’incidents.",declencheur:"Un incident évitable a révélé le besoin d’un audit automatisé avant reboot sur 15 000+ serveurs Unix/Linux.",probleme:"L’absence de procédure unifiée causait des erreurs humaines et des interruptions évitables.",objectif:"Créer un script non intrusif pour auditer automatiquement l’état des serveurs avant reboot, standardisant les pratiques via un workflow agnostic.",action:["Conception d’un script KSH/Perl pour auditer CPU, mémoire, disques et processus critiques.","Intégration via BladeLogic pour une exécution multi-OS.","Ajout de rapports HTML/CSV pour un suivi clair.","Validation avec les équipes Unix pour garantir la compatibilité."],deploiement:["Intégration dans un workflow BladeLogic agnostic : détection des serveurs, exécution 2x/jour, rapports archivés.","Blocage automatique des reboots en cas d’anomalie détectée.","Adoption silencieuse comme routine d’exploitation sur tout le parc."],impacts:["Standardisation des vérifications sur 15 000+ serveurs.","Réduction de 90 % des incidents post-maintenance.","Outil devenu référence MCO sans incident signalé."],remarque:"Conçu pour un usage ponctuel, ce script BladeLogic est devenu une brique essentielle grâce à sa simplicité et sa fiabilité."},{titre:"Vérification automatique des flux réseau (2013–2015)",contexte:"Les ouvertures de flux réseau chez Orange nécessitaient des tests manuels, entraînant des allers-retours et des délais entre équipes.",declencheur:"Les dépendances inter-équipes et les erreurs fréquentes ont motivé la création d’un outil automatisé complémentaire.",probleme:"Les vérifications manuelles surchargeaient les équipes réseau et ralentissaient les déploiements.",objectif:"Automatiser les tests de connectivité post-ouverture via un workflow agnostic, sans modifier les outils existants.",action:["Conception de scripts composites (NSH, KSH, Perl) via BladeLogic.","Récupération automatique des données (IP, ports, protocoles).","Tests réseau depuis les bons points techniques avec rapports HTML/CSV.","Collaboration avec une ingénieure réseau pour valider l’approche."],deploiement:["Intégration dans un workflow BladeLogic agnostic, complémentaire au processus existant.","Validation automatique des ouvertures avec détection des anomalies.","Rapports clairs pour une exploitation sans retraitement manuel."],impacts:["Élimination de 90 % des allers-retours inter-équipes.","Gain de 3 à 5 jours par ouverture de flux.","Zéro surcharge pour les admins réseau.","Outil maintenu en production sans refonte."],remarque:"Ce workflow BladeLogic a fluidifié un processus critique, prouvant qu’une automatisation bien pensée peut résoudre des frictions ignorées."},{titre:"Refonte CI/CD sur TCF (2015–2016)",contexte:"Une API de consolidation de référentiels nécessitait une chaîne d’intégration continue fiable et structurée.",objectif:"Moderniser la chaîne de livraison de l’API : passage à Git, standardisation build, automatisation des déploiements.",action:["Migration de CVS vers Git avec adoption du modèle GitFlow","Structuration du build Maven et intégration continue avec Jenkins et Nexus","Déploiement automatisé via Ansible sur tous les environnements (y compris production)","Collaboration directe avec la communauté Ansible pendant une période instable"],deploiement:["CI/CD complet mis en place et utilisé en production","Stabilisation rapide des livraisons grâce aux automatisations","Autonomie accrue des développeurs"],impacts:["Réduction des erreurs humaines","Fiabilisation de la livraison de l’API","Montée en compétence collective sur Git/CI"],remarque:"Première mise en pratique complète de mes compétences CI/CD sur un projet métier clé."},{titre:"Pipelines CI/CD sur KDO & Orange Reprise – Phase 1 (2016–2019)",contexte:"Deux projets majeurs lancés simultanément nécessitaient une automatisation complète dès le début.",objectif:"Concevoir des chaînes CI/CD différenciées, adaptées aux équipes et aux environnements.",action:["Déploiement initial avec Git, Jenkins, Nexus, Ansible","Migration progressive vers GitLab CI","Automatisation des migrations BDD avec mécanisme de rollback sécurisé","Support de pipelines différenciés entre environnement recette, préprod et production"],deploiement:["Chaînes en place et maintenues en conditions opérationnelles","Références internes lors des audits DevOps de 2017"],impacts:["Accélération des cycles de livraison","Réduction des erreurs sur la base de données","Exemplarité DevOps reconnue en interne"],remarque:"J’ai été à la fois concepteur, opérateur et garant du bon fonctionnement dans la durée."},{titre:"Premier déploiement vers Cloud Foundry – Orange Connect (2019–2023)",contexte:"Un projet de gestion d'identité multi-équipes nécessitait un déploiement cloud sécurisé et modulaire.",objectif:"Déployer l’application sur Cloud Foundry avec tous les services managés associés.",action:["Configuration des environnements sur Cloud Foundry","Choix des services managés (PostgreSQL, Vault, S3...)","Mise en place des pipelines CI/CD adaptés","Coordination multi-équipes et gestion des accès"],deploiement:["Déploiement réussi de bout en bout","Capitalisation sur cette expérience pour les migrations suivantes"],impacts:["Fiabilisation du socle Cloud","Amélioration de la coordination entre équipes","Déploiement sécurisé avec services managés"],remarque:"Première expérience structurante sur Cloud Foundry, répliquée ensuite sur d’autres projets."},{titre:"Migration vers Cloud Foundry et unification CI/CD sur KDO & Orange Reprise – Phase 2 (2021–2023)",contexte:"Suite au déploiement réussi d’Orange Connect, KDO et Orange Reprise ont été migrés vers Cloud Foundry.",objectif:"Unifier les pipelines CI/CD pour fiabiliser les déploiements sur la plateforme cloud.",action:["Migration de Jenkins/Ansible vers GitLab CI","Unification des chaînes CI/CD des deux projets","Utilisation des services managés Cloud Foundry"],deploiement:["Chaînes CI/CD consolidées et déployées","Usage standardisé des services cloud internes"],impacts:["Réduction du coût de maintenance","Industrialisation des bonnes pratiques cloud","Autonomie accrue des équipes techniques"],remarque:"Nous avons consolidé les enseignements d’Orange Connect pour concevoir une solution durable sur KDO/Orange Reprise."},{titre:"Exploration entrepreneuriale et engagement Web3 / IA (2023–2025)",contexte:"Après une phase intense dans des environnements critiques, j’ai réorienté mes compétences vers des domaines émergents comme le Web3 et l’IA, tout en consolidant mon expertise cloud.",objectif:"Explorer les usages concrets du Web3, de l’IA et des architectures cloud décentralisées, en concevant des prototypes innovants et en renforçant mon autonomie technique.",action:["Création de WallEx, un explorateur de wallets crypto multichaînes en Python, utilisant les APIs CoinMarketCap, Blockscout, Zerion et Moralis, avec une IHM interactive basée sur Dash, Plotly et Pandas.","Participation au hackathon Colosseum x Superteam France en tant que BizDev, avec un prototype de plugin Web3 pour Unreal Engine (Solidity, IPFS), en collaboration avec un partenaire clé.","Création d’EasyLandingWeb, un générateur intelligent de landing pages statiques avec IA, réalisé dans le cadre du World’s Largest Hackathon (Bolt.New, DevPost), utilisant Bolt.New, un template HTML pour la structure et une interface combinatoire pour maximiser les possibilités tout en restant prévisible, déployé sur easylandingweb.page.","Test du rôle de provider sur Akash Network, un Kubernetes décentralisé, pour évaluer les architectures cloud distribuées, et exploration de Google Cloud Platform (GCP) pour des PoCs cloud.","Engagement communautaire via MonkeDAO.","Participation à de nombreux événements crypto et IA en France."],deploiement:["Prototypes fonctionnels (WallEx, EasyLandingWeb) présentés publiquement, avec EasyLandingWeb hébergé sur easylandingweb.page.","Collaboration avec des équipes internationales, notamment Superteam, lors des hackathons (Colosseum, DevPost).","Création d’une présence technique sur GitHub and lors d’événements."],impacts:["WallEx développé comme un prototype fonctionnel, présenté pour un grant mais non poursuivi faute de financement.","EasyLandingWeb conçu pour un client local, déployé on easylandingweb.page pour ma propre landing page, avec un potentiel identifié pour d’autres utilisateurs.","Validation technique d’Akash Network comme solution Kubernetes décentralisée et exploration de GCP pour des architectures cloud modernes.","Réseaux élargis via MonkeDAO et hackathons, ouvrant des opportunités internationales."],remarque:"Cette période a renforcé mon positionnement comme Architecte Système, avec un focus sur les solutions Web3, IA et cloud décentralisé, s’appuyant sur des technologies comme Python, Dash, APIs blockchain et Kubernetes."}],g="Architecte Système à l’intersection du cloud, de l’IA et des workflows critiques, je conçois des solutions robustes et durables. Fort de 15 ans d’expérience DevOps (CI/CD avec Jenkins, GitLab CI, Docker, Cloud Foundry), j’ai exploré le Web3 et l’IA via des projets open source (WallEx, EasyLandingWeb) et des hackathons, ainsi que des architectures cloud modernes comme Akash Network (Kubernetes décentralisé) et GCP. Formé à la conception de processeurs et au prototypage FPGA, avec une expérience backend (Java/Kotlin), je recherche des rôles pour optimiser des systèmes distribués avec rigueur et automatisation avancée.",h="Conçu et rédigé par Thierry Vogel, 2025",f={version:d,titre:c,court_apropos:p,long_apropos:b,resumes_rapides:m,etudes_de_cas:v,et_aujourdhui:g,pied_de_page:h};function l(e){return e.includes("Augmentation")?"🛠️":e.includes("Pré-check")?"🧪":e.includes("Interopérabilité")?"🌐":e.includes("Refonte")?"🔁":e.includes("Pipelines")?"⚙️":e.includes("Cloud")?"☁️":e.includes("Unification")?"🧩":e.includes("Exploration")?"🚀":"✅"}function x(e){return`
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-x-hidden">
      <!-- Blueprint Grid Background -->
      <div class="absolute inset-0 opacity-20" style="
        background-image: 
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
        background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px;
      "></div>
      
      <!-- Blueprint Frame Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Corner markers -->
        <div class="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400"></div>
        <div class="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400"></div>
        <div class="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-400"></div>
        <div class="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-400"></div>
        
        <!-- Title block frame -->
        <div class="absolute top-16 left-8 right-8 h-32 border border-blue-400/40 rounded-sm"></div>
        
        <!-- Technical annotations -->
        <div class="absolute top-20 left-12 text-xs text-blue-400/60 font-mono">PORTFOLIO-TV-2025</div>
        <div class="absolute bottom-20 right-12 text-xs text-blue-400/60 font-mono">REV-001</div>
      </div>
      
      <!-- Main border frame -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
      
      <div class="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        ${C(e)}
        ${k(e)}
        ${w(e)}
        ${y(e)}
        ${I(e)}
        ${q(e)}
      </div>
    </div>
  `}function C(e){return`
    <header id="header" class="text-center mb-16 relative">
      <div class="absolute -top-6 -left-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      <div class="absolute -top-6 -right-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      <div class="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      <div class="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        ${e.titre}
      </h1>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto">
        ${e.court_apropos}
      </p>
    </header>
  `}function w(e){return`
    <section id="resumes-rapides" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200">Résumés rapides</h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="grid gap-4 mt-4">
          ${e.resumes_rapides.map((t,i)=>`
    <a href="#case-${i}" class="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-800/30 transition-colors group cursor-pointer block">
      <div class="flex-shrink-0 p-2 bg-blue-700/50 rounded-full group-hover:bg-blue-600/50 transition-colors text-2xl">
        ${l(t.titre)}
      </div>
      <div class="flex-grow">
        <h3 class="font-semibold text-blue-100 mb-2 flex items-center gap-2">
          ${t.titre.replace(/^[🛠️🧪🌐🔁⚙️☁️🧩🚀]\s*/,"")}
          <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </h3>
        <p class="text-blue-200 text-sm leading-relaxed">
          ${t.resume}
        </p>
      </div>
    </a>
  `).join("")}
        </div>
      </div>
    </section>
  `}function k(e){return`
    <section id="a-propos" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            À propos de moi
          </h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="mt-4 space-y-4">
          ${e.long_apropos.split(`

`).map(t=>`<p class="text-blue-100 leading-relaxed">${t}</p>`).join("")}
        </div>
      </div>
    </section>
  `}function y(e){return`
    <section id="etudes-de-cas" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Études de cas détaillées
          </h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="mt-4 space-y-6">
          ${e.etudes_de_cas.map((t,i)=>`
    <div id="case-${i}" class="border-2 border-blue-500/40 rounded-lg bg-slate-800/30 scroll-mt-20">
      <div class="flex items-center gap-3 p-4 bg-slate-800/50 border-b border-blue-500/30">
        <div class="p-2 bg-blue-600/60 rounded border border-blue-400/40 text-xl">
          ${l(t.titre)}
        </div>
        <h3 class="text-lg font-semibold text-blue-100">
          ${t.titre.replace(/^[🛠️🧪🌐🔁⚙️☁️🧩🚀]\s*/,"")}
        </h3>
      </div>
      
      ${j(t)}
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function j(e){let o='<div class="p-6 space-y-6 bg-slate-900/20">';return(e.contexte||e.declencheur)&&(o+=`
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Contexte
        </h4>
        <p class="text-blue-100 leading-relaxed pl-4">
          ${e.contexte||e.declencheur}
        </p>
      </div>
    `),e.objectif&&(o+=`
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Objectif
        </h4>
        <div class="text-blue-100 leading-relaxed pl-4">
          ${e.objectif.split(`
`).map(t=>t.startsWith("- ")?`
                <div class="flex items-start gap-2 mb-1">
                  <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>${t.substring(2)}</span>
                </div>
              `:t.trim()?`<p class="mb-2">${t}</p>`:"").join("")}
        </div>
      </div>
    `),e.action&&e.action.length>0&&(o+=`
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Actions menées
        </h4>
        <div class="space-y-2 pl-4">
          ${e.action.map(t=>`
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-blue-100">${t}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `),e.deploiement&&e.deploiement.length>0&&(o+=`
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Déploiement
        </h4>
        <div class="space-y-2 pl-4">
          ${e.deploiement.map(t=>`
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="text-blue-100">${t}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `),e.impacts&&e.impacts.length>0&&(o+=`
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-green-400 border border-green-300"></div>
          Impacts
        </h4>
        <div class="space-y-2 pl-4">
          ${e.impacts.map(t=>`
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-blue-100">${t}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `),e.remarque&&(o+=`
      <div class="bg-slate-800/40 p-4 rounded border-l-4 border-blue-400 border border-blue-500/30">
        <p class="text-blue-100 italic">${e.remarque}</p>
      </div>
    `),o+="</div>",o}function I(e){return`
    <section id="aujourdhui" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Et aujourd'hui ?
          </h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="mt-4 space-y-4">
          ${e.et_aujourdhui.split(`

`).map(t=>t.includes("- ")?`<div class="space-y-2">${t.split(`
`).map(s=>s.startsWith("- ")?`
            <div class="flex items-start gap-2 ml-4">
              <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-blue-100">${s.substring(2)}</span>
            </div>
          `:s.trim()?`<p class="text-blue-100 leading-relaxed">${s}</p>`:"").join("")}</div>`:`<p class="text-blue-100 leading-relaxed">${t}</p>`).join("")}
        </div>
      </div>
    </section>
  `}function q(e){return`
    <footer id="footer" class="text-center py-8 border-t-2 border-blue-400/40 relative">
      <div class="absolute top-0 left-8 right-8 h-px bg-blue-400/60"></div>
      
      <a href="#header" class="mb-4 px-4 py-2 bg-blue-600/60 hover:bg-blue-500/60 border border-blue-400/60 rounded text-blue-100 text-sm transition-colors inline-block">
        ↑ Retour en haut
      </a>
      
      <p class="text-blue-300 text-sm">
        ${e.pied_de_page}
      </p>
    </footer>
  `}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("app");e.innerHTML=x(f)+L(),A()});function L(){return`
    <nav id="floating-nav" class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-slate-900/90 backdrop-blur-sm border-2 border-blue-400/60 rounded-lg p-2 shadow-lg">
      <div class="flex flex-col gap-2">
        <a href="#header" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="header">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            En-tête
          </div>
        </a>
        <a href="#a-propos" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="a-propos">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            À propos
          </div>
        </a>
        
        <a href="#resumes-rapides" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="resumes-rapides">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Résumés rapides
          </div>
        </a>
        
        
        <a href="#etudes-de-cas" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="etudes-de-cas">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Études de cas
          </div>
        </a>
        
        <a href="#aujourdhui" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="aujourdhui">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Aujourd'hui
          </div>
        </a>
        
        <a href="#footer" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="footer">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Pied de page
          </div>
        </a>
      </div>
    </nav>
  `}function A(){const e=document.querySelectorAll(".nav-item"),o=["header","resumes-rapides","a-propos","etudes-de-cas","aujourdhui","footer"];function t(){const i=window.scrollY+100;let s="header";o.forEach(r=>{const n=document.getElementById(r);if(n){const a=n.offsetTop,u=a+n.offsetHeight;i>=a&&i<u&&(s=r)}}),e.forEach(r=>{r.getAttribute("data-section")===s?(r.classList.add("bg-blue-600/50","border","border-blue-400/60"),r.classList.remove("hover:bg-blue-600/30")):(r.classList.remove("bg-blue-600/50","border","border-blue-400/60"),r.classList.add("hover:bg-blue-600/30"))})}window.addEventListener("scroll",t),t(),e.forEach(i=>{i.addEventListener("click",function(s){s.preventDefault();const r=this.getAttribute("href").substring(1),n=document.getElementById(r);if(n){const a=n.offsetTop-80;window.scrollTo({top:a,behavior:"smooth"})}})})}
