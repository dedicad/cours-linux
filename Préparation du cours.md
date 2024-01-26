# Attentes (Lettre de Mission)
L’intitulé de la formation est : GNU/Linux.
Les objectifs pédagogiques visés par cette formation sont :
- Les fondements de la manipulation d’un système Unix ;
- Comprendre les spécificités d’un système GNU/Linux ;
- Être fluide dans l’utilisation d’un terminal et l’exécution de CLIs.


# TODO : 
- [ ] Compléter plan du cours
- [x] Demander à Max son lien pour faire des slides
- [ ] Trouver des exercices pratiques à faire 
- [ ] Compléter les différentes partie
- [ ] Faire des slides
- [ ] Faire le QCM avec les questions

# Plan du cours

1. Origine et philosophie Unix / Linux
   1. Origine
   2. Concept de distribution
   3. L'utilisation intensive de Linux pour les serveurs de déploiements
2. L'arborescence de fichier et les permissions 
   1. Dossier / fichiers / liens symboliques / exécutables
   2. chown chiffres / droits
   3. Pertinent de rentre dans concept inode / stockage ?
3. Comment se repérer dans les commandes ?
   1. man
   2. tldr
4. Le terminal et sa customisation --> Seulement exo pratique je pense
   1. Les éditeurs de terminaux : nano ; e-mac ; vi/vim/neovim
   2. Créer des alias
   3. Chainer des commandes (grep ; && ; |)
5. Exécuter des programmes
   1. rendre un fichier exécutable
   2. Utiliser son répertoire de binaire pour le lancer plus facilement
   3. Créer des daemon pour lancer dès le démarrage
6. Installer des paquets
   1. aptitude
   2. snap
7. Monitorer un système
   1. ps/top/htop/lsof
   2. Arrêter un programmer : kill / killall
   3. Mettre en place un firewall et bloquer un port
8. Protocole SSH
   1. Qu'est ce que le protocole SSH
   2. Comment générer une clé ?
   3. Comment autoriser la connection sur un serveur ?

# 


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


## Key Learnings

- Savoir se déplacer dans les fichiers et comprendre les permissions (zip/ dezip)
- Utiliser man & tldr
- Customisation de terminal : bash / zsh / oh-my-zsh 
- Lancer / créer des petits scripts (bash / shell) background / foreground


- Comprendre les spécificités d'un système Linux (daemon, installation de paquet / aptitude, mise à jours, etc.)
- Protocole SSH 
- Observabilité : savoir ce qui tourne / ce que ça coute, comment l'arrêter, etc.
- Gestion réseau et port réseau (savoir ce qu'il tourne / ouvrir un port, firewall, etc.) : analogie avec une prise usb et un bouchon qui la bloque.





