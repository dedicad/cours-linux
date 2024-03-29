# Passage à la pratique !
### A. Naviguer sur son ordinateur
<p class="opacity-90 border-1 border-separate p2">Dans l'ensemble des sessions pratiques, les commandes "man" et "tldr" sont vos amies !</p>

1. Ouvrez un terminal, et utiliser une commande pour connaitre le chemin de là ou vous vous trouvez
2. Comment remonter dans l'arborescence d'un étage ?
3. Comment accéder en une ligne à un dossier particulier ?
4. Utilisez la commande tree pour afficher l'arborescence avec 2 niveaux de profondeurs de votre Home.
5. Comment lister la liste des fichiers, incluant les fichiers cachés dans le répertoire /usr/bin ?

---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### B. Manipuler des alias

1. Installez un alias "show" qui, lorsqu'on l'utilise "show filtre" renvoie la liste des fichiers du dossier courant dont le nom contient "filtre". Par exemple "show test" doit renvoyer tous les fichier qui contiennent le mot test.
2. Utilisez la commande "alias" pour obtenir la définition de votre alias
3. Quel fichier binaire est exécuté lorsque l'on utilise la commande "shutdown" ?

---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### C. Créer des fichiers

<p class="opacity-90 border-1 border-separate p2">Pour quittez vim sans sauvegarder, vous pouvez utiliser ":q!" commme combinaison ou ":wq" pour sauvegarder.</p>

1. Utilisez vim pour créer un fichier "exercice.txt"
2. Copiez collez le texte suivant dans le fichier, en utilisant le mode Insertion (touche "i") de vim puis ctrl + v (ou ctrl + maj + v)
   <div class="text-xs">
   Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system. An operating system is software that manages all of the hardware resources associated with your desktop or laptop. To put it simply, the operating system manages the communication between your software and your hardware. Without the operating system (OS), the software wouldn’t function.</div>

3. Enregistrez le fichier et quittez vim (:wq)
4. Depuis votre terminal, Ajouter une ligne au bout du fichier à l'aide de ">>"

<p v-click class="opacity-90 border-1 border-separate p2">Vim et Neovim sont des outils très puissants pour gérer du texte (et donc du code). Un tutoriel est intégré et permet de rapidement construire des automatismes pour ceux qui seraient intéressés ! (En [voilà un abrégé](https://opensource.com/article/19/3/getting-started-vim))</p>


---
transition: fade-out
hideInToc: true
---


# Passage à la pratique !
### C. Créer des fichiers

5. Créez un fichier "script" en bash/shell, rendez le exécutable à l'aide de la commande chmod


6. Ce script doit faire une boucle pour afficher (commande "echo") 10 lignes :
   1. Ligne 1
   2. Ligne 2
   3. etc.
7. Le script peut être utilisé de la façon suivante : "sh script"
8. Déplacez le script dans /usr/bin pour pouvoir peu importe le dossier ou vous vous trouvez
9.  Modifier le script pour qu'il puisse prendre un argument et afficher le nombre de ligne en conséquence : "script 5" ne renverra que 5 lignes.





---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### D. Se repérer dans un fichier texte

1. Télécharger le fichier html suivant à l'aide de la commande curl
   1. https://agilemanifesto.org/principles.html
2. Utilisez la commande grep pour retourner toute les lignes contenant le mot "software"
3. Pouvez vous afficher toute les lignes les précédant ?
4. Utilisez la commande cat pour afficher l'ensemble du fichier
5. Utilisez la commande tail pour afficher les 20 dernières lignes du fichier


---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### E. Manipuler des logs


<p class="opacity-90 border-1 border-separate p2">Beaucoup de programmes tournent en parallèle sur des systèmes linux. Les logs sont par défaut localisés dans /var/log</p>

1. Les logs systèmes sont écrites en temps réel dans le fichier /var/log/syslog : Affichez ces logs en temps réel dans votre terminal via la commande tail
2. Use command "grep" to visualize all errors in system logs
3. Dans beaucoup de systèmes les logs, ou d'autres fichiers sont au format JSON
   1. Faites un appel à l'api OpenMétéo : https://open-meteo.com/en/docs/ pour connaitre les métriques météo d'Orléans.
   2. Stocker le résultat de cet appel dans un fichier .json
   3. Utilisez l'utilitaire jq pour extraire la vitesse du vent (wind_speed)
   4. Concevez un programme bash "meteo" de telle sorte qu'il affiche la vitesse du vent pour n'importe quelle latitude et longitude.
   5. Bonus : Utiliser [google Maps](https://developers.google.com/maps/documentation/geocoding/requests-geocoding?hl=fr) (me demander une clé API de test) pour faire un programme qui donne la vitesse du vent pour n'importe quelle adresse.


---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### F. Bonus

<br/>

Lors du cours, nous avons parlé du système de distribution Linux. 

Sur le site suivant [distroSea](https://distrosea.com/) vous pouvez tester quelques distributions et appréhender les différences entre chacune.
Vous pouvez tester Ubuntu et Arch par exemple.


- Vous pouvez également prendre de l'avance sur demain, en essayant d'utiliser une clé usb Live pour booter votre ordinateur sur Linux. N'hésitez pas à m'appeler !

---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### F. Bonus n°2

<br/>

1. Utiliser le "Get Started" de docker pour l'installer sur votre machine et lancer le container hello_world
2. Comment docker fonctionne-t-il ?
3. Lancer une image de docker avec la distribution [Alpine](https://hub.docker.com/_/alpine) ou [Debian Slim](https://hub.docker.com/_/debian)
4. Accéder au shell dans le container docker et éteindre le container depuis l'intérieur
5. Rallumez le container. Transférez des fichiers entre votre machine et le container docker (qu'on appellera container-server)
6. Ajouter un serveur http qui écoute sur le port 80 et répond hello_world (language de votre choix, vous pouvez en récupérez des déjà écrits)
7. Lancer ce serveur http dans le container
8. Utilisez docker-compose pour ajouter un second container alpine (appelé container-client)
   1. Permettez la communication sur le port 80 entre les deux containers via la configuration du docker-compose
   2. Depuis container-client, installer un script qui fait 4 appels à une adresse précise (celle de container-server) sur le port 80
   3. Observez bien les appels entre les 2 containers dans les logs de container-server


---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### F. Bonus n°3

1. Installer [fnm](https://nodejs.org/en/download/package-manager#fnm) et la version 20 de NodeJS
2. Installer [tldr](https://tldr.sh/#installation) sur votre ordinateur via npm (node packet manager)
3. Créer un programme exécutable en ligne de commande (dans le language de votre choix, pour node [les outils suivants](https://byby.dev/node-command-line-libraries) sont assez agréables mais c'est possible en C++ également) : 
   1. Le programme doit faire le boostrap d'une application web en architecture MVC ([définition Wikipédia](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur), [exemple sur OpenClassrooms](https://openclassrooms.com/fr/courses/4670706-adoptez-une-architecture-mvc-en-php/7847928-decouvrez-comment-fonctionne-une-architecture-mvc))
   2. Le programme doit demander à l'utilisateur le nom du projet
   3. Dans un premier temps le language du projet est fixe (par exemple Php ou javascript)
   4. Dans un seconde temps, permettez à l'utilisateur de sélectionner dans une liste déroulante le language qu'il souhaite (php, javascript, typescript, nodeJS, etc. à vous d'ajoutez ceux que vous pouvez !)