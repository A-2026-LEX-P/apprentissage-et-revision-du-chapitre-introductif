
const quizzes = [
  {
    id: 4,
    title: "Étude de cas et raisonnement géopolitique",
    duration: "8 minutes",
    questions: [
      {
        question: "Une frontière est contestée parce qu'elle traverse une région riche en pétrole. Quel facteur explique le mieux cette contestation ?",
        answers: [
          "Le refus de tout échange culturel.",
          "L'absence de toute souveraineté dans les régions pétrolières.",
          "L'enjeu économique et stratégique des ressources, qui renforce la rivalité territoriale.",
          "La disparition des États voisins."
        ],
        correct: 2,
        explanation: "Les ressources stratégiques peuvent renforcer les rivalités de souveraineté. Les acteurs cherchent alors à contrôler les territoires et les infrastructures qui permettent de les exploiter."
      },
      {
        question: "Le Soudan du Sud possède d'importantes ressources pétrolières, mais les infrastructures d'exportation passent par le Soudan. Quel enseignement géopolitique peut-on en tirer ?",
        answers: [
          "Les ressources n'ont aucune influence sur les relations frontalières.",
          "La maîtrise d'un territoire et celle des infrastructures de transport peuvent conférer un pouvoir stratégique distinct.",
          "Le pays qui possède le pétrole contrôle automatiquement toutes les voies d'exportation.",
          "Les frontières n'ont aucun effet sur les flux économiques."
        ],
        correct: 1,
        explanation: "La possession des ressources et la maîtrise des voies de transport sont deux leviers de pouvoir différents. L'interdépendance économique peut être source de coopération, mais aussi de tensions."
      },
      {
        question: "Quelle situation illustre le mieux la différence entre une frontière de droit et le contrôle effectif d'un territoire ?",
        answers: [
          "Un traité établit une frontière, mais des affrontements empêchent les États de contrôler durablement certains secteurs.",
          "Une frontière n'est jamais définie par des accords.",
          "Une frontière est automatiquement stable dès sa proclamation.",
          "Un État ne peut jamais perdre le contrôle d'une région qu'il revendique."
        ],
        correct: 0,
        explanation: "Une frontière peut être juridiquement définie sans que le contrôle territorial soit pleinement assuré. Les conflits, les milices ou les contestations peuvent empêcher l'application effective d'un accord."
      },
      {
        question: "Quel argument démontre le mieux que l'augmentation du nombre de frontières ne signifie pas nécessairement une augmentation des conflits ?",
        answers: [
          "Toute frontière nouvelle est pacifique par définition.",
          "Les États ne se disputent jamais les ressources.",
          "Les frontières n'ont aucun rapport avec les relations internationales.",
          "Certaines frontières nouvelles résultent de processus négociés ou reconnus, même si d'autres restent contestées."
        ],
        correct: 3,
        explanation: "La création d'une frontière peut être le résultat d'une indépendance ou d'un accord politique. Son apparition ne conduit donc pas automatiquement à la guerre."
      }
    ]
  },

  {
    id: 5,
    title: "Mondialisation et ouverture des frontières",
    duration: "6 à 8 minutes",
    questions: [
      {
        question: "Quel mécanisme explique le mieux la relation entre mondialisation et ouverture des frontières ?",
        answers: [
          "La mondialisation entraîne nécessairement la suppression des frontières politiques.",
          "La multiplication des échanges favorise des accords qui réduisent certaines entraves, sans supprimer la souveraineté des États.",
          "La mondialisation interdit aux États de contrôler les marchandises.",
          "La mondialisation ne concerne que les migrations internationales."
        ],
        correct: 1,
        explanation: "Les accords commerciaux et les politiques d'intégration régionale facilitent certains échanges, sans supprimer automatiquement les frontières ni la souveraineté des États."
      },
      {
        question: "Quelle distinction entre l'espace Schengen et le marché intérieur de l'Union européenne est correcte ?",
        answers: [
          "Schengen concerne principalement la libre circulation des personnes et l'absence de contrôles systématiques aux frontières intérieures ; le marché intérieur organise notamment la circulation des marchandises, des services, des capitaux et des personnes.",
          "Schengen supprime tous les contrôles aux frontières extérieures de l'Europe.",
          "Le marché intérieur ne concerne que les citoyens européens qui voyagent.",
          "Les deux espaces regroupent nécessairement exactement les mêmes pays."
        ],
        correct: 0,
        explanation: "Schengen et le marché intérieur sont deux cadres distincts, même s'ils se recoupent largement. Leurs objectifs et leurs règles ne sont pas identiques."
      },
      {
        question: "Quel est le rôle de l'ACEUM dans les relations entre les États-Unis, le Mexique et le Canada ?",
        answers: [
          "Supprimer les trois États et créer un État fédéral nord-américain.",
          "Autoriser une circulation totalement libre de toutes les personnes sans aucun contrôle.",
          "Organiser des règles commerciales régionales qui facilitent certains échanges de biens et de services.",
          "Fermer les frontières aux investissements étrangers."
        ],
        correct: 2,
        explanation: "L'ACEUM, entré en vigueur en 2020, succède à l'ALENA. Il organise des règles commerciales entre trois États souverains."
      },
      {
        question: "Quel énoncé concernant le Soudan et le Soudan du Sud est le plus juste ?",
        answers: [
          "Leur indépendance a rendu inutile tout contrôle de leur frontière.",
          "L'importance des échanges économiques prouve que les deux États ont fusionné.",
          "Une frontière ouverte aux échanges ne peut jamais être fermée pour des raisons sanitaires.",
          "Les flux économiques et pastoraux rendent le passage important, mais les conflits et les crises sanitaires peuvent perturber ces circulations."
        ],
        correct: 3,
        explanation: "Les flux économiques et les mobilités pastorales créent une interdépendance, mais les tensions politiques, les conflits et les urgences sanitaires peuvent limiter les échanges."
      }
    ]
  },

  {
    id: 6,
    title: "Différentiel frontalier et logique des interfaces",
    duration: "7 minutes",
    questions: [
      {
        question: "Une entreprise états-unienne installe une usine au Mexique afin de bénéficier de coûts de production plus faibles et d'exporter vers les États-Unis. Quel mécanisme explique principalement cette localisation ?",
        answers: [
          "La disparition de la frontière entre les deux pays.",
          "La création d'un État commun.",
          "Le différentiel frontalier, qui rend les conditions de production différentes et complémentaires.",
          "L'absence totale de règles commerciales."
        ],
        correct: 2,
        explanation: "Le différentiel frontalier attire les entreprises lorsqu'elles peuvent combiner des coûts de production différents et un accès facilité à un marché voisin."
      },
      {
        question: "Pourquoi Detroit et Windsor constituent-elles un exemple d'interface transfrontalière ?",
        answers: [
          "Parce que les deux villes appartiennent au même État.",
          "Parce que leurs activités productives, notamment automobiles, sont complémentaires et reliées par des flux réguliers de marchandises et de travailleurs.",
          "Parce qu'elles ne possèdent aucun contrôle douanier.",
          "Parce que leur frontière a été supprimée juridiquement."
        ],
        correct: 1,
        explanation: "Detroit et Windsor participent à un même système productif régional, notamment dans l'automobile. La frontière reste juridiquement présente et les flux sont contrôlés."
      },
      {
        question: "Quel exemple illustre le mieux les limites d'une interface transfrontalière ?",
        answers: [
          "Des usines qui échangent des pièces automobiles chaque jour.",
          "Une région où des travailleurs franchissent régulièrement la frontière.",
          "Un accord régional qui réduit les droits de douane.",
          "Une frontière commerciale dont les passages sont interrompus par une crise sanitaire ou un conflit armé."
        ],
        correct: 3,
        explanation: "Une interface dépend des conditions politiques, sécuritaires et sanitaires. Les échanges peuvent être interrompus malgré une forte interdépendance."
      },
      {
        question: "Quelle affirmation définit correctement l'intégration régionale ?",
        answers: [
          "Le processus d'augmentation des échanges et de rapprochement entre des territoires voisins, souvent soutenu par des accords.",
          "L'obligation pour deux États de fusionner en un seul.",
          "Le processus de fermeture systématique des frontières.",
          "La suppression des différences économiques entre tous les territoires concernés."
        ],
        correct: 0,
        explanation: "L'intégration régionale suppose un accroissement des relations et des échanges. Elle ne signifie ni fusion politique ni disparition des inégalités."
      }
    ]
  },

  {
    id: 7,
    title: "Khorgos et les nouvelles routes de la soie",
    duration: "7 à 8 minutes",
    questions: [
      {
        question: "Quel facteur explique le développement de Khorgos à la frontière entre la Chine et le Kazakhstan ?",
        answers: [
          "La disparition de toute activité commerciale frontalière.",
          "La fermeture des infrastructures de transport entre la Chine et l'Asie centrale.",
          "Le développement d'infrastructures logistiques et ferroviaires dans le cadre des nouvelles routes de la soie.",
          "La fusion de la Chine et du Kazakhstan."
        ],
        correct: 2,
        explanation: "Les nouvelles routes de la soie, lancées par la Chine en 2013, s'accompagnent d'investissements dans les infrastructures de transport et de logistique."
      },
      {
        question: "Pourquoi Khorgos peut-il être qualifié d'interface transfrontalière ?",
        answers: [
          "Parce qu'il met en relation deux territoires à travers des flux commerciaux et logistiques.",
          "Parce qu'il est situé à l'intérieur d'un seul État sans lien avec l'étranger.",
          "Parce qu'il constitue une zone entièrement dépourvue de réglementation.",
          "Parce qu'il interdit le passage des marchandises."
        ],
        correct: 0,
        explanation: "Khorgos relie la Chine à l'Asie centrale et aux réseaux de transport vers l'Europe. Son rôle repose sur le passage et la circulation."
      },
      {
        question: "Quel problème illustre le développement inégal de part et d'autre de Khorgos ?",
        answers: [
          "Les infrastructures ne peuvent jamais influencer les échanges.",
          "Les investissements et les retombées économiques peuvent bénéficier davantage au côté chinois qu'au côté kazakhstanais.",
          "Les deux États ont nécessairement les mêmes niveaux de développement.",
          "Les échanges commerciaux interdisent toute dépendance économique."
        ],
        correct: 1,
        explanation: "Les investissements, les infrastructures et l'attractivité ne se répartissent pas nécessairement de façon équilibrée entre les deux côtés de la frontière."
      },
      {
        question: "Quel enseignement général peut-on tirer de Khorgos ?",
        answers: [
          "Une interface n'existe que lorsque les deux pays ont exactement le même niveau de richesse.",
          "Une frontière ouverte empêche toute concurrence entre territoires.",
          "Les nouvelles routes commerciales font disparaître les souverainetés nationales.",
          "Une interface peut renforcer les échanges tout en produisant des inégalités et des dépendances."
        ],
        correct: 3,
        explanation: "L'ouverture peut produire des gains économiques, mais les retombées sont inégales. L'interface est donc à la fois un espace de coopération et un lieu de concurrence."
      }
    ]
  },

  {
    id: 8,
    title: "Les frontières comme espaces de coopération et de tensions",
    duration: "8 minutes",
    questions: [
      {
        question: "Pourquoi les frontières du Grand Genève constituent-elles un exemple de coopération transfrontalière ?",
        answers: [
          "Parce que les travailleurs français et suisses n'ont aucune mobilité.",
          "Parce que les deux États ont supprimé toute différence de salaire.",
          "Parce que les déplacements quotidiens de travailleurs et les besoins en transports conduisent à organiser des services et des politiques communes.",
          "Parce que Genève se trouve entièrement en France."
        ],
        correct: 2,
        explanation: "Les mobilités quotidiennes créent des besoins communs en matière de transport et d'aménagement. La coopération permet d'organiser les déplacements entre les deux côtés de la frontière."
      },
      {
        question: "Les échanges entre le Rwanda et la République démocratique du Congo sont importants, mais des passages peuvent être fermés lors d'une épidémie. Que montre cette situation ?",
        answers: [
          "Une interface peut être active tout en restant vulnérable aux crises sanitaires et politiques.",
          "Une interface est nécessairement un espace sans contrôle.",
          "Les flux transfrontaliers empêchent toute propagation épidémique.",
          "Les crises sanitaires n'ont aucun effet sur les frontières."
        ],
        correct: 0,
        explanation: "L'intensité des échanges ne protège pas une interface des crises. Les fermetures sanitaires montrent que les fonctions de circulation et de contrôle peuvent entrer en tension."
      },
      {
        question: "Pourquoi une frontière peut-elle être une interface pour des activités illicites ?",
        answers: [
          "Parce que les activités illicites sont toujours autorisées par les États.",
          "Parce que les différences de réglementation, les difficultés de contrôle et les réseaux transnationaux peuvent être exploités par des groupes criminels.",
          "Parce que les frontières suppriment les lois nationales.",
          "Parce que les trafics illicites ne franchissent jamais les frontières."
        ],
        correct: 1,
        explanation: "Les groupes criminels peuvent exploiter les différences juridiques et les failles de contrôle. La frontière devient alors un espace stratégique pour les réseaux illicites."
      },
      {
        question: "Quelle affirmation est la plus juste concernant les accords internationaux et l'ouverture des frontières ?",
        answers: [
          "Ils rendent les contrôles inutiles dans toutes les situations.",
          "Ils garantissent que les États ne peuvent plus modifier leurs politiques.",
          "Ils ne concernent que les échanges de marchandises.",
          "Ils peuvent faciliter les échanges, mais leur application dépend des règles adoptées, des contrôles et des décisions politiques."
        ],
        correct: 3,
        explanation: "Les accords organisent les échanges, mais ne suppriment pas les souverainetés nationales. Les États conservent des compétences de contrôle et peuvent adopter certaines mesures exceptionnelles."
      }
    ]
  },

  {
    id: 9,
    title: "Barriérisation et contrôle",
    duration: "7 minutes",
    questions: [
      {
        question: "Quelle proposition définit le mieux la barriérisation ?",
        answers: [
          "La suppression de toute frontière politique.",
          "La création d'accords de libre circulation entre tous les États.",
          "Le processus de durcissement et de fermeture d'une partie des frontières au moyen de dispositifs matériels, humains ou technologiques.",
          "La disparition de la souveraineté des États sur leur territoire."
        ],
        correct: 2,
        explanation: "La barriérisation désigne le renforcement des fonctions de contrôle et de fermeture. Elle peut être matérielle, technologique ou humaine."
      },
      {
        question: "Pourquoi les murs ne sont-ils pas toujours synonymes de fermeture complète ?",
        answers: [
          "Parce que les États peuvent maintenir des points de passage contrôlés tout en empêchant certains franchissements.",
          "Parce que les murs n'ont jamais d'effet sur les mobilités.",
          "Parce qu'une frontière équipée d'un mur n'est pas juridiquement une frontière.",
          "Parce que les murs suppriment tous les contrôles."
        ],
        correct: 0,
        explanation: "Les États peuvent maintenir des passages autorisés tout en rendant le franchissement clandestin plus difficile. Le mur est donc souvent un instrument de filtrage."
      },
      {
        question: "Quelle situation correspond à une frontière filtrante ?",
        answers: [
          "Une frontière où aucun passage n'est autorisé.",
          "Une frontière qui autorise certains flux tout en contrôlant ou en limitant les autres.",
          "Une frontière qui n'est pas reconnue juridiquement.",
          "Une frontière dépourvue de toute surveillance."
        ],
        correct: 1,
        explanation: "Une frontière filtrante sélectionne les flux : elle n'est ni totalement ouverte ni totalement fermée."
      },
      {
        question: "Pourquoi la frontière entre les États-Unis et le Mexique est-elle un bon exemple de l'ambivalence des frontières contemporaines ?",
        answers: [
          "Parce qu'elle a été supprimée par l'ALENA.",
          "Parce que les deux pays interdisent tous les échanges.",
          "Parce qu'elle ne comporte aucun poste-frontière.",
          "Parce qu'elle combine des échanges économiques importants, des points de passage très fréquentés et des dispositifs de fermeture et de contrôle."
        ],
        correct: 3,
        explanation: "La frontière nord-américaine combine intégration économique et contrôle territorial. Elle montre que l'ouverture commerciale n'entraîne pas automatiquement la libre circulation de toutes les personnes."
      }
    ]
  },

  {
    id: 10,
    title: "Les frontières de conflit",
    duration: "7 à 8 minutes",
    questions: [
      {
        question: "Pourquoi la frontière entre les deux Corées est-elle fortement militarisée ?",
        answers: [
          "Parce que les deux pays ont supprimé leurs armées.",
          "Parce que la guerre de Corée s'est achevée par un traité de paix définitif.",
          "Parce que l'armistice de 1953 a interrompu les combats sans régler définitivement le conflit politique et militaire.",
          "Parce que la frontière ne sépare pas deux États souverains."
        ],
        correct: 2,
        explanation: "L'armistice de Panmunjeom, signé en 1953, met fin aux combats à grande échelle, mais aucun traité de paix définitif n'a réglé le conflit entre les deux Corées."
      },
      {
        question: "Quel est le rôle de la zone démilitarisée (DMZ) en Corée ?",
        answers: [
          "Constituer une zone tampon entre les forces militaires des deux Corées, dont l'accès est fortement réglementé.",
          "Permettre la libre circulation sans contrôle entre les deux pays.",
          "Faire disparaître la ligne de démarcation militaire.",
          "Remplacer les deux gouvernements par une autorité commune."
        ],
        correct: 0,
        explanation: "La DMZ est une zone tampon située autour de la ligne de démarcation militaire. Elle est fortement surveillée et son nom ne signifie pas qu'elle est dépourvue de dispositifs militaires à ses abords."
      },
      {
        question: "Pourquoi la barrière construite par Israël en Cisjordanie fait-elle l'objet de controverses ?",
        answers: [
          "Parce qu'elle ne présente aucun lien avec les mobilités.",
          "Parce que les critiques portent notamment sur son tracé, ses effets sur les déplacements palestiniens et ses conséquences territoriales.",
          "Parce qu'elle a supprimé les revendications territoriales.",
          "Parce qu'elle a mis fin à tous les conflits de la région."
        ],
        correct: 1,
        explanation: "Les critiques portent sur les effets du tracé et des dispositifs de contrôle sur les territoires et les populations palestiniennes, ainsi que sur les conséquences de la barrière pour l'organisation de la Cisjordanie."
      },
      {
        question: "Quelle proposition explique le mieux la fonction d'une barrière sur une frontière chaude ?",
        answers: [
          "Elle garantit nécessairement la paix.",
          "Elle rend toute négociation impossible.",
          "Elle supprime les revendications de souveraineté.",
          "Elle peut limiter certains franchissements et renforcer la surveillance, sans régler les causes politiques du conflit."
        ],
        correct: 3,
        explanation: "Une barrière peut avoir une fonction sécuritaire, mais elle ne règle pas à elle seule les désaccords territoriaux ou idéologiques qui sont à l'origine des tensions."
      }
    ]
  },

  {
    id: 11,
    title: "Migrations, filtrage et frontières technologiques",
    duration: "7 à 8 minutes",
    questions: [
      {
        question: "Quel est l'objectif principal des smart borders ?",
        answers: [
          "Remplacer toutes les frontières par des réseaux commerciaux.",
          "Supprimer les contrôles d'identité.",
          "Utiliser des technologies pour faciliter certains passages et améliorer la surveillance, l'identification et le filtrage des flux.",
          "Garantir que tous les voyageurs bénéficient exactement du même traitement, quelles que soient les règles applicables."
        ],
        correct: 2,
        explanation: "Les frontières intelligentes combinent des outils numériques et des bases de données pour organiser les contrôles. Elles peuvent accélérer certains passages tout en renforçant le filtrage."
      },
      {
        question: "Quel exemple illustre une stratégie de contrôle des migrations par barriérisation ?",
        answers: [
          "La construction de clôtures et de dispositifs de surveillance aux abords de Ceuta pour contrôler les franchissements.",
          "La suppression de tous les postes-frontières.",
          "La création d'un accord de libre circulation sans contrôle.",
          "La mise en place d'une zone de libre-échange pour les marchandises."
        ],
        correct: 0,
        explanation: "Les dispositifs de Ceuta illustrent une stratégie de contrôle des franchissements vers une frontière extérieure de l'Union européenne."
      },
      {
        question: "Pourquoi les frontières maritimes, notamment en Méditerranée, sont-elles des espaces majeurs des politiques de contrôle migratoire ?",
        answers: [
          "Parce qu'elles sont juridiquement dépourvues de toute réglementation.",
          "Parce qu'elles combinent des flux migratoires, des opérations de surveillance et des enjeux de sécurité et de sauvetage en mer.",
          "Parce qu'aucun contrôle ne peut être exercé en mer.",
          "Parce que les migrations maritimes sont exclusivement touristiques."
        ],
        correct: 1,
        explanation: "Les frontières maritimes concentrent des enjeux de migration, de contrôle, de sécurité et de sauvetage. Le filtrage doit donc être analysé avec les enjeux humanitaires."
      },
      {
        question: "Quel enjeu politique soulèvent les contrôles biométriques ?",
        answers: [
          "Ils suppriment automatiquement les risques d'erreur.",
          "Ils rendent inutile le droit international.",
          "Ils empêchent les États d'identifier les voyageurs.",
          "Ils posent des questions de protection des données, de libertés individuelles, d'erreurs d'identification et de critères de contrôle."
        ],
        correct: 3,
        explanation: "La biométrie soulève des questions de proportionnalité, de confidentialité et de fiabilité. L'efficacité technique ne dispense pas du respect des garanties juridiques."
      }
    ]
  },

  {
    id: 12,
    title: "Fermeture sanitaire, contrôle et géopolitique",
    duration: "8 minutes",
    questions: [
      {
        question: "Pourquoi les fermetures de frontières pendant la pandémie de Covid-19 sont-elles importantes pour comprendre les frontières contemporaines ?",
        answers: [
          "Elles ont prouvé que les frontières ne pouvaient plus être contrôlées.",
          "Elles ont supprimé définitivement les échanges internationaux.",
          "Elles ont montré que les États pouvaient réactiver les contrôles pour des motifs sanitaires, même dans un contexte de mondialisation.",
          "Elles ont supprimé toutes les souverainetés nationales."
        ],
        correct: 2,
        explanation: "La pandémie a montré que les États pouvaient limiter les mobilités pour des motifs sanitaires, même dans des régions fortement intégrées."
      },
      {
        question: "Dans le cas du Soudan et du Soudan du Sud, pourquoi les conflits armés compliquent-ils la gestion de la frontière ?",
        answers: [
          "Parce que les conflits peuvent provoquer des déplacements de population, empêcher l'application des accords et perturber les échanges économiques.",
          "Parce qu'ils suppriment automatiquement les revendications territoriales.",
          "Parce que les populations ne franchissent jamais les frontières en période de guerre.",
          "Parce que les ressources pétrolières cessent d'avoir toute importance stratégique."
        ],
        correct: 0,
        explanation: "Les guerres provoquent des déplacements de population, perturbent les échanges et rendent parfois difficile le contrôle des territoires. Le Soudan et le Soudan du Sud illustrent ces interdépendances."
      },
      {
        question: "Quelle proposition explique le mieux la relation entre protectionnisme et fermeture des frontières ?",
        answers: [
          "Le protectionnisme consiste toujours à interdire toute migration.",
          "Le protectionnisme vise uniquement à renforcer les frontières militaires.",
          "Il consiste à supprimer les droits de douane pour favoriser toutes les importations.",
          "Il vise à protéger certains secteurs économiques par des mesures commerciales qui peuvent limiter ou renchérir les échanges."
        ],
        correct: 3,
        explanation: "Le protectionnisme cherche à protéger certains producteurs ou secteurs en limitant la concurrence étrangère par des droits de douane, des quotas ou d'autres mesures."
      },
      {
        question: "Quelle conclusion générale peut-on tirer des exemples de barriérisation, de contrôle migratoire et de fermeture sanitaire ?",
        answers: [
          "Les frontières ont disparu avec la mondialisation.",
          "Les frontières sont des dispositifs évolutifs dont les fonctions peuvent être renforcées selon les objectifs politiques, sécuritaires, sanitaires ou économiques des États.",
          "Toutes les frontières ont la même fonction et le même degré d'ouverture.",
          "Une frontière ne peut avoir qu'une fonction militaire."
        ],
        correct: 1,
        explanation: "Les frontières ne disparaissent pas : leurs fonctions se transforment. Selon les circonstances, elles peuvent faciliter les échanges, contrôler les flux ou renforcer la séparation."
      }
    ]
  }
];

