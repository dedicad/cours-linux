# Attentes (Lettre de Mission)
L’intitulé de la formation est : GNU/Linux.
Les objectifs pédagogiques visés par cette formation sont :
- Les fondements de la manipulation d’un système Unix ;
- Comprendre les spécificités d’un système GNU/Linux ;
- Être fluide dans l’utilisation d’un terminal et l’exécution de CLIs.


# TODO : 
- [x] Compléter plan du cours
- [x] Demander à Max son lien pour faire des slides
- [ ] Trouver des exercices pratiques à faire 
- [ ] Compléter les différentes partie
- [ ] Faire des slides
- [ ] Faire le QCM avec les questions -> Jeudi soir
- [ ] Relire le format des journées (arbitrage théorie / pratique)
- [ ] M'inspirer du repo de Max pour deployer sur Github Pages 

# Plan du cours

Jour 1 : 
Origine des systèmes Unix, commande simples, terminal

Jour 2 : 

Monitorer un système, Protocole SSH, Dual Boot

1. Origine et philosophie Unix / Linux
   1. Origine & Définition d'un système d'exploitation
      1. les différents types de systèmes d'exploitations
   2. Concept de distribution
      1. Les distributions classiques : Ubuntu, Debian, Fedora, kali + Mac OS / Android
   3. L'utilisation intensive de Linux pour les serveurs de déploiements
      1. Qu'est ce qu'une VM ? 
2. Installer des paquets
   1. aptitude
   2. snap
   3. brew
3. L'arborescence de fichier et les permissions 
   1. Dossier / fichiers / liens symboliques / exécutables 
   2. chown chiffres / droits
4. Comment se repérer dans les commandes ?
   1. man
   2. tldr
   3. sudo
5. Le terminal et sa customisation --> Seulement exo pratique je pense
   1. Les éditeurs de terminaux : nano ; e-mac ; vi/vim/neovim
   2. Les différents terminaux
   3. Créer des alias (+ which + history)
   4. Chainer des commandes (grep ; && ; |)
6. Exécuter des programmes
   1. rendre un fichier exécutable
   2. Utiliser son répertoire de binaire pour le lancer plus facilement
7. Passons à la pratique !
   1. Naviguer sur son ordinateur : pwd, cd, tree, ls
   2. créer un alias de commande
   3. Créer des fichiers (touch / vim)
   4. Grep : se repérer dans un fichier texte, trouver des lignes
   5. Parser des logs ? ex: les logs d'un daemon classiques / les logs systèmes (avec tail par exemples)
   6. jq ; cat
   

   --- Jour 2


7. Mécanisme de cron et de daemon
   1. Cron
   2. Systemctl
   

8. Monitorer un système
   1. ps/top/htop/lsof/watch
   2. Arrêter un programmer : kill / killall
   3. Mettre en place un firewall et bloquer un port
9.  Protocole SSH
   1. Qu'est ce que le protocole SSH (différence clé publique et clé privée)
   2. Comment générer une clé ?
   3. Comment autoriser la connection sur un serveur ? (ssh_authorized_keys et lecture automatique du .ssh)
10. Dual Boot
   1. Les partitions d'un disques
   2. Les sytèmes de fichiers classiques
   3. Linux Live
   4. Comment fonctionne un dual Boot
11. Advanced notions (optional) ? 
    1. kernel space vs User Space
12. Passons à la pratique !
    1.  Poursuivre les exercices de hier
    2.  Lancer un programme en background
    3.  L'observer, le passer en foreground puis l'arrêter avec kill
    4.  Bonus - Faire tourner un Live Linux sur son ordinateur
    5.  Bonus - Installer un Dual Boot sur son ordinateur
    6.  Créer une cron
    7.  Créer un daemon avec systemctl et le piloter
    8.  Générer une clé ssh
    9.  Utiliser htop pour observer la mémoire utilisé par les programmes de son système
    10. Utilisez lsof pour observer ce qui tourne sur le port réseau 80 (http)
    11. Bonus - Installer ufw, enable. Bloquer le traffic entrant, afficher le status et les règles en vigueur. Désactiver ensuite pour éviter des blocages.
    





# Evalution

-> Préparer un QCM qui rassemble les questions


## Idées
  > Faire un kahoot pour évaluer leur compétence / connaissance au début

  ### Partie Pratique
  > Leur donner l'addresse de https://distrosea.com/ pour accéder à des distributions à tester
  > Leur expliquer comment démarrer WSL
  > Ou alors télécharger émulateur avec images de VM.

  > Bonus : Instaler docker ; Lancer une image de docker avec ubuntu 22 dessus
  > Bonus : accéder à un shell dans le container, et éteindre le système
   > Bonus : Créer un programme exécutable en ligne de commande (dans le language de votre choix) qui boostrap une architecture de fichier pour un projet de dév en architecture MVC 
      > Variante : permettre le choix, pour proposer une architecture hexagonale
   > Bonus : installer fnm et la version 20 de NodeJS
   > Bonus : Utilisez docker-compose pour faire communiquer 2 containers docker entre eux. (1 serveur et 1 base de donnée postgresql par exemple)


## Key Learnings

- Savoir se déplacer dans les fichiers et comprendre les permissions (zip/ dezip)
- Utiliser man & tldr
- Customisation de terminal : bash / zsh / oh-my-zsh 
- Lancer / créer des petits scripts (bash / shell) background / foreground


- Comprendre les spécificités d'un système Linux (daemon, installation de paquet / aptitude, mise à jours, etc.)
- Protocole SSH 
- Observabilité : savoir ce qui tourne / ce que ça coute, comment l'arrêter, etc.
- Gestion réseau et port réseau (savoir ce qu'il tourne / ouvrir un port, firewall, etc.) : analogie avec une prise usb et un bouchon qui la bloque.





