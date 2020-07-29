Documentation
=============

Ces scripts permettent de visualiser la "courbe" de tendance des prix d'annonces présentes sur le site leboncoin.

Un premier script permet de récupérer les annonces répondant à vos critères. Les annonces sont récupéres au format JSON.
Un seond script génère le graphique.

Prérequis
---------

* nodejs

Instructions
------------

préciser vos critères en modifiant le script getAnnonces.js puis :

    node getAnnonce.js > annonces.json
    node graph.js < annonces.json

See also
--------

la doc de l'API leboncoin sur https://durieux.me/projects/leboncoin.html
