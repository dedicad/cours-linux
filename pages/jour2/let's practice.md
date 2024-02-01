# Passage à la pratique !
### A. Manipuler son historique

<p v-click class="opacity-90 border-1 border-separate p2">L'ensemble des commandes que vous exécutez sont stockés dans un fichier $HISTFILE. Dans la majorité des cas il s'agit du fichier .bash_history ou .zsh_history</p>

1. Visualisez votre historique : 17 dernières commandes
2. Afficher la variable $HISTSIZE : quelle taille maximale votre historique peut-il faire ?
3. Augmenter cette taille maximale à 2000 en rajoutant un export dans votre .bashrc (ou .zshrc) qui set la variable $HISTSIZE à 2000 et la variable $HISTFILESIZE à 2000 également.
4. Ouvrez un 2e terminal, votre historique est-il partagé entre vos 2 terminaux ?
   
---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### B. Créer des utilisateurs

<p v-click class="opacity-90 border-1 border-separate p2">Les utilisateurs et les groupes permettent de gérer de façon précise et sécurisé les droits dans les systèmes Linux.</p>

1. Listez l'ensemble des comptes utilisateurs sur votre système
2. Que signifie le nologin affiché pour certains utilisateurs ?
3. Utilisez la commande "su" pour changer d'utilisateur : prenez l'utilisateur root.
4. Utilisez ctrl+d pour revenir à votre utilisateur standard
5. Créez un nouvel utilisateur "courslinux"
6. Créeé un nouveau groupe d'utilisateur "cours"
7. Ajoutez l'utilisateur courslinux au groupe cours
8. Utilisez la commande "su" pour changer d'utilisateur : prenez l'utilisateur courslinux
9. Entrez la commande "cd". Ou vous trouvez vous ?
     
---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### C. Manipuler des archives

- télécharger un fichier en ligne (par exemple le fichier html https://agilemanifesto.org/principles.html)
- Utilisez la commande tar pour créer un archive (fichier zippé) de ce fichier
- Copiez l'archive avec la commande cp dans un dossier "archives" que vous avez crée au préalable
- Extraire de l'archive le fichier d'origine, à l'aide de la commande tar

---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### C. Gérer des permissions sur les fichiers
<p v-click class="opacity-90 border-1 border-separate p2">La gestion des permissions est une composante importante des connaissances Linux.</p>

<p v-click class="opacity-90 border-1 border-separate p2">Nous allons utiliser l'utilisateur courslinux que vous avez crée dans la partie B</p>

- créez 3 fichiers dans le dossier de votre choix : "fichier_sensible", "fichier_privé", "fichier_public".
- Pouvez vous faire en sorte de modifier les permissions du fichier sensible pour que l'utilisateur courslinux ne puisse plus le lire (ni le modifier) ?
- Pouvez vous faire en sorte que tous les utilisateurs du groupe "cours" (dont l'utilisateur courslinux) puisse lire le fichier "fichier_privé" mais pas que les autres utilisateurs (utilisateurs publics) ne puissent ?
- Pouvez vous faire en sorte que tout le monde puisse modifier le fichier "fichier_public" ?


---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### D. Installer un Dual Boot

- Pour les personnes intéressés, sollicitez  mon aide si besoin ! Et j'ai des clés à disposition !
  
---
transition: fade-out
hideInToc: true
---



# Passage à la pratique !
### E. Observer son système - 1

1. Utiliser la commande top pour observer le pourcentage de mémoire utilisé par le processus le plus consommateur de votre ordinateur.
2. Ouvrez une fenêtre firefox
3. Utilisez la commande htop pour visualiser l'utilisation de chacun de vos coeurs CPU. Pouvez vous filtrer la liste pour n'obtenir que des processus lié à firefox ?
4. Triez la liste par pourcentage de CPU utilisé.
5. Utiliser ps permet d'afficher une vue plus synthétique des processus qui tournent (les processus systèmes sont cachés par défaut)
6. Ouvrez un second terminal
   
---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### E. Observer son système

1. Utiliser ps -lah : pouvez vous voir les 2 processus liés à vos deux terminaux ?
2. Obtenez l'id (pid) du processus de votre second terminal
3. Utilisez kill PID pour arrêter votre second terminal. S'est-t-il arrêté ?
4. Utilisez kill -9 PID pour forcer l'arrêt
5. Rouvrez un terminal
6. Utilisez killall -9 zsh pour arrêtez tous les terminaux zsh (ou bash en fonction de ce que vous utilisez)
7. Rouvrez un terminal, qu'est ce que la commande "watch ps" renvoie ? Comment fonctionne-t-elle ?

---
transition: fade-out
hideInToc: true
---


# Passage à la pratique !
### F. Lancer des programmes

1. Créer un script bash en boucle infinie qui echo "ligne $i" (avec un counter) et qui attend (commande sleep) 1 seconde entre chaque ligne.
2. Lancer le programme en background (avec le &)
3. Utilisez la commande "ps -ef | grep votre_pid" pour observer que votre programme tourne en arrière-plan
4. Utilisez la commande kill pour tuer votre programme
5. Relancez votre programme, mais en foreground cette fois-ci
6. Utilisez ctrl+z pour suspendre l'exécution de votre programme (gel du programme)

---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### F. Lancer des programmes
7. Utilisez la commande "jobs" pour visualize votre programme et son état
8. Utilisez bg %1 pour reprendre l'exécution de votre programme en background
9.  Utilisez fg %1 pour ramener en foreground votre programme
10. Utilisez ctrl+c pour interrompre votre programme définitivement.
11. Ouvrez un second terminal et lancer votre programme dessus. Est-ce que vous êtes capable que votre programme continue de tourner même quand vous fermerez votre 2e terminal ?


---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### G. Gérer un cron

1. Crée un programme bash qui echo la date et l'heure courante
2. Utilisez la commande crontab -e pour editer le fichier de crontab
3. Ajoutez une ligne pour exécuter votre programme toute les minutes (Utilisez [crontab guru](https://crontab.guru/) pour la syntaxe de l'horaire)
4. Redirigez la sortie vers le fichier ~/cronlogs.log
5. Utilisez crontab -l pour visualisez vos cron jobs
6. Retirez votre cron de votre système

---
transition: fade-out
hideInToc: true
---


# Passage à la pratique !
### H. Gérer une clé SSH

1. Créez une clé ssh avec le protocole ed25519
2. Utilisez cat pour visualisez la clé publique ajoutée dans votre .ssh
3. Utilisez cat pour visalisez la clé privée (attention cette clé doit rester strictement privée et sur votre ordinateur !)
4. Ajoutez la clé publique dans votre profil github
  
---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### I. Bonus

1. Affichez l'ensemble des interfaces réseaux disponibles
2. Désactiver l'une de vos interface réseau
3. Ré-activer l'interface
4. Afficher l'ensemble des ports réseaux en fonctionnement (avec netstat) 
5. Pouvez vous filtrer pour n'afficher que les ports TCP ?
6. Installer un firewall avec ufw
7. A quoi sert la commande screen ?
  
---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### J. Bonus n°2

1. Pouvez vous obtenir depuis votre terminal l'adresse IP du DNS de coda.school ? (nslookup or dig)
2. Pouvez vous obtenir votre addresse IP privée ?
3. Quelle est votre adresse IP Privée ?
4. Pouvez trouver l'espace utilisé dans votre répertoire /home ?
5. Quel est l'espace restant sur votre disque ?
6. Créer un nouveau service avec systemctl pour votre ordinateur ([exemple de tutoriel](https://www.fosslinux.com/111815/a-guide-to-creating-linux-services-with-systemd.htm))
  
---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### J. Bonus n°3

1. Qu'est ce qu'un hash SHA-1 ?
2. Comment peut-on l'utiliser pour vérifier l'intégrité d'un packet avant de l'installer ?
3. Créer une Cron qui permet de réaliser un backup de votre fichier "~.zshrc" (ou "~.bashrc") tous les jours à 16h. Ce backup devra être envoyé dans le dossier ~/sav et être historisé : 1 fichier par jour, suffixé par la date (timestamp) du jour.
4. Installer [Minikube](https://kubernetes.io/fr/docs/tasks/tools/install-minikube/) sur votre ordinateur : cet outils permet de lancer des containers sur votre ordinateur, comme un kubernetes à distance.
5. Utiliser Minikube pour lancer un déploiement qui a pour image node:20-alpine 

  
---
transition: fade-out
hideInToc: true
---

